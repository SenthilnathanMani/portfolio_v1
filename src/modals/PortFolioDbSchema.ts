import mongoose from "mongoose";

const PortfolioScheme = new mongoose.Schema({
    content: String,
    embedding: [Number],
});

export default mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioScheme, "portfolio");