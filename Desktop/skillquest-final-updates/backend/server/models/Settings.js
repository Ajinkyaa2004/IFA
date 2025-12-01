import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
    whatsappLink: {
        type: String,
        default: '',
    },
    whatsappLinkGame1: {
        type: String,
        default: '',
        description: 'WhatsApp link shown after completing Unblock Me',
    },
    whatsappLinkGame2: {
        type: String,
        default: '',
        description: 'WhatsApp link shown after completing Minesweeper',
    },
    whatsappLinkGame3: {
        type: String,
        default: '',
        description: 'WhatsApp link shown after completing Water Capacity (final group)',
    },
    announcementTitle: {
        type: String,
        default: '',
    },
    announcementContent: {
        type: String,
        default: '',
    },
    showAnnouncement: {
        type: Boolean,
        default: false,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    updatedBy: {
        type: String,
        default: 'admin',
    },
});

// Transform to remove MongoDB _id
settingsSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

export default mongoose.model('Settings', settingsSchema);
