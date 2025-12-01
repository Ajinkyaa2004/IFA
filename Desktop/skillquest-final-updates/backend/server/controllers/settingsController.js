import Settings from '../models/Settings.js';

// Get settings
export const getSettings = async (req, res, next) => {
    try {
        let settings = await Settings.findOne();

        // If no settings exist, create default settings
        if (!settings) {
            settings = await Settings.create({
                whatsappLink: '',
                whatsappLinkGame1: '',
                whatsappLinkGame2: '',
                whatsappLinkGame3: '',
                announcementTitle: '',
                announcementContent: '',
                showAnnouncement: false,
                updatedAt: new Date(),
                updatedBy: 'system',
            });
        }

        res.json(settings);
    } catch (error) {
        next(error);
    }
};

// Update settings (admin only)
export const updateSettings = async (req, res, next) => {
    try {
        const { whatsappLink, whatsappLinkGame1, whatsappLinkGame2, whatsappLinkGame3, announcementTitle, announcementContent, showAnnouncement } = req.body;

        let settings = await Settings.findOne();

        if (!settings) {
            // Create new settings if none exist
            settings = await Settings.create({
                whatsappLink: whatsappLink || '',
                whatsappLinkGame1: whatsappLinkGame1 || '',
                whatsappLinkGame2: whatsappLinkGame2 || '',
                whatsappLinkGame3: whatsappLinkGame3 || '',
                announcementTitle: announcementTitle || '',
                announcementContent: announcementContent || '',
                showAnnouncement: showAnnouncement || false,
                updatedAt: new Date(),
                updatedBy: req.user?.email || 'admin',
            });
        } else {
            // Update existing settings
            settings.whatsappLink = whatsappLink || '';
            settings.whatsappLinkGame1 = whatsappLinkGame1 || '';
            settings.whatsappLinkGame2 = whatsappLinkGame2 || '';
            settings.whatsappLinkGame3 = whatsappLinkGame3 || '';
            settings.announcementTitle = announcementTitle || '';
            settings.announcementContent = announcementContent || '';
            settings.showAnnouncement = showAnnouncement !== undefined ? showAnnouncement : false;
            settings.updatedAt = new Date();
            settings.updatedBy = req.user?.email || 'admin';
            await settings.save();
        }

        res.json(settings);
    } catch (error) {
        next(error);
    }
};
