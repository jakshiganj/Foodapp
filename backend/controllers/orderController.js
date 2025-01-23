import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing order for frontend
const placeOrder = async (req, res) => {

    const frontend_url = "http://localhost:5174/";
    

    try {
        // Create a new order using the provided data
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        // Save the order to the database
        await newOrder.save();

        // Clear the user's cart after placing the order
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Directly return a success response
        // Simulating success response without Stripe
         res.json({
             success: true,
             message: "Order placed successfully!",
             orderId: newOrder._id,
            // session_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`  // Optional redirect URL
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error placing the order"
        });
    }
}

//user order for frontend
const userOrders = async (req,res) => {
    try {
        const orders =await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({
            success:false,message:"Error"
        })
    }
}

// listing orders for admin panel
const listOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//api for updating order status
const updateStatus = async (req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export { placeOrder,userOrders,listOrders,updateStatus };
