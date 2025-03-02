import bookingModel from "../models/bookingModel.js";
import { ThanksForBooking as ThanksForBookingTemplate, NewBooking } from "../config/emailTemplates.js";
import transporter from "../config/nodemailer.js";

export const ThanksForBooking = async (req, res) => {
    const { name, email, phone, service, date, time, message } = req.body;
  
    if (!name || !email || !phone || !service || !date || !time) {
      return res.json({ success: false, message: "Missing Details" });
    }
  
    try {
        // Create booking in database
        const booking = await bookingModel.create({ 
            name, 
            email, 
            phone, 
            service, 
            date, 
            time,
            message: message || "" 
        });
        
        if(!booking) {
            return res.json({ success: false, message: "Booking Failed" });
        }

        // Sending Booking Email to admin
        const adminMailOptions = {
            from: process.env.SENDER_EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: "New Booking",
            html: NewBooking.replace('{{name}}', name)
                           .replace('{{email}}', email)
                           .replace('{{phone}}', phone)
                           .replace('{{service}}', service)
                           .replace('{{date}}', date)
                           .replace('{{time}}', time),
        };
        
        // Sending Booking Email to customer
        const customerMailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Thanks for Booking",
            html: ThanksForBookingTemplate.replace('{{name}}', name)
                                 .replace('{{email}}', email)
                                 .replace('{{phone}}', phone)
                                 .replace('{{service}}', service)
                                 .replace('{{date}}', date)
                                 .replace('{{time}}', time),   
        };
  
        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(customerMailOptions);
  
        return res.json({ success: true, message: "Booking confirmed! Check your email for details." });
    } catch (error) {
        console.error("Booking error:", error);
        return res.json({ success: false, message: error.message });
    }
};