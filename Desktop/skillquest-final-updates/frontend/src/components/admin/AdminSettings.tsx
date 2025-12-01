import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getSettings, updateSettings } from '@/lib/settingsApi';
import { toast } from 'sonner';
import { MessageSquare, Save, ExternalLink, Megaphone, Eye, EyeOff, Bold, Italic, List, Highlighter } from 'lucide-react';
import { motion } from 'framer-motion';

export const AdminSettings: React.FC = () => {
    const [whatsappLink, setWhatsappLink] = useState('');
    const [whatsappLinkGame1, setWhatsappLinkGame1] = useState('');
    const [whatsappLinkGame2, setWhatsappLinkGame2] = useState('');
    const [whatsappLinkGame3, setWhatsappLinkGame3] = useState('');
    const [announcementTitle, setAnnouncementTitle] = useState('');
    const [announcementContent, setAnnouncementContent] = useState('');
    const [showAnnouncement, setShowAnnouncement] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingSettings, setLoadingSettings] = useState(true);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const insertTag = (tag: string) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selectedText = text.substring(start, end);

        let newText = '';
        let newCursorPos = 0;

        if (tag === 'ul') {
            newText = text.substring(0, start) + `<ul>\n  <li>${selectedText || 'List item'}</li>\n</ul>` + text.substring(end);
            if (!selectedText) {
                newCursorPos = start + 9; // Position inside <li>
            } else {
                newCursorPos = start + newText.length;
            }
        } else {
            newText = text.substring(0, start) + `<${tag}>${selectedText}</${tag}>` + text.substring(end);
            if (!selectedText) {
                newCursorPos = start + tag.length + 2; // Position between tags
            } else {
                newCursorPos = start + newText.length;
            }
        }

        setAnnouncementContent(newText);

        setTimeout(() => {
            textarea.focus();
            if (!selectedText) {
                textarea.setSelectionRange(newCursorPos, newCursorPos);
            }
        }, 0);
    };

    useEffect(() => {
        loadSettings();
    }, []);
    
    const loadSettings = async () => {
        try {
            setLoadingSettings(true);
            const settings = await getSettings();
            setWhatsappLink(settings.whatsappLink || '');
            setWhatsappLinkGame1(settings.whatsappLinkGame1 || '');
            setWhatsappLinkGame2(settings.whatsappLinkGame2 || '');
            setWhatsappLinkGame3(settings.whatsappLinkGame3 || '');
            setAnnouncementTitle(settings.announcementTitle || '');
            setAnnouncementContent(settings.announcementContent || '');
            setShowAnnouncement(settings.showAnnouncement || false);
        } catch (error) {
            console.error('Error loading settings:', error);
            toast.error('Failed to load settings', {
                duration: 3000,
                icon: '⚠️',
            });
        } finally {
            setLoadingSettings(false);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await updateSettings({ 
                whatsappLink, 
                whatsappLinkGame1,
                whatsappLinkGame2,
                whatsappLinkGame3,
                announcementTitle, 
                announcementContent, 
                showAnnouncement 
            });
            toast.success('Settings saved successfully!', {
                duration: 2000,
                icon: '✅',
            });
        } catch (error) {
            console.error('Error saving settings:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to save settings', {
                duration: 3000,
                icon: '❌',
            });
        } finally {
            setLoading(false);
        }
    };

    if (loadingSettings) {
        return (
            <div className="flex items-center justify-center p-8">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-8 h-8 border-4 border-[#8558ed] border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="border-2 border-[#8558ed]/20 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-[#8558ed]">
                        <MessageSquare className="w-6 h-6" />
                        Application Settings
                    </CardTitle>
                    <CardDescription>
                        Configure application-wide settings that will be displayed to users
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="whatsappLink" className="flex items-center gap-2 text-base">
                                <MessageSquare className="w-4 h-4 text-[#8558ed]" />
                                WhatsApp Link
                            </Label>
                            <Input
                                id="whatsappLink"
                                type="url"
                                value={whatsappLink}
                                onChange={(e) => setWhatsappLink(e.target.value)}
                                placeholder="https://wa.me/1234567890"
                                className="rounded-xl border-2 border-[#8558ed]/20 focus:border-[#8558ed] focus:ring-4 focus:ring-[#8558ed]/10"
                            />
                            <p className="text-sm text-gray-500 flex items-start gap-2">
                                <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>
                                    This link will be displayed to users after they complete their profile.
                                    Use the format: <code className="bg-gray-100 px-1 rounded">https://wa.me/YOUR_NUMBER</code>
                                </span>
                            </p>
                            {whatsappLink && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-3 bg-green-50 border border-green-200 rounded-lg"
                                >
                                    <p className="text-sm text-green-800 font-medium mb-1">Preview:</p>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-green-600 hover:text-green-700 underline flex items-center gap-1"
                                    >
                                        {whatsappLink}
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </motion.div>
                            )}
                        </div>

                        {/* Game WhatsApp Links Section */}
                        <div className="space-y-4 pt-6 border-t-2 border-[#8558ed]/10">
                            <Label className="flex items-center gap-2 text-lg font-semibold text-[#8558ed]">
                                <MessageSquare className="w-5 h-5" />
                                Game Completion WhatsApp Links
                            </Label>
                            <p className="text-sm text-gray-500 mb-4">
                                These links will be shown to applicants after they complete each game
                            </p>

                            {/* Game 1 - Unblock Me */}
                            <div className="space-y-2 p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <Label htmlFor="whatsappLinkGame1" className="flex items-center gap-2 text-base font-semibold text-orange-700">
                                    <MessageSquare className="w-4 h-4" />
                                    Game 1: Unblock Me
                                </Label>
                                <Input
                                    id="whatsappLinkGame1"
                                    type="url"
                                    value={whatsappLinkGame1}
                                    onChange={(e) => setWhatsappLinkGame1(e.target.value)}
                                    placeholder="https://chat.whatsapp.com/..."
                                    className="rounded-xl border-2 border-orange-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                                />
                                <p className="text-xs text-orange-600">
                                    Shown after completing Unblock Me game
                                </p>
                                {whatsappLinkGame1 && (
                                    <a
                                        href={whatsappLinkGame1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-orange-600 hover:text-orange-700 underline flex items-center gap-1 mt-1"
                                    >
                                        Test link <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </div>

                            {/* Game 2 - Minesweeper */}
                            <div className="space-y-2 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <Label htmlFor="whatsappLinkGame2" className="flex items-center gap-2 text-base font-semibold text-purple-700">
                                    <MessageSquare className="w-4 h-4" />
                                    Game 2: Minesweeper
                                </Label>
                                <Input
                                    id="whatsappLinkGame2"
                                    type="url"
                                    value={whatsappLinkGame2}
                                    onChange={(e) => setWhatsappLinkGame2(e.target.value)}
                                    placeholder="https://chat.whatsapp.com/..."
                                    className="rounded-xl border-2 border-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                                />
                                <p className="text-xs text-purple-600">
                                    Shown after completing Minesweeper game
                                </p>
                                {whatsappLinkGame2 && (
                                    <a
                                        href={whatsappLinkGame2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-purple-600 hover:text-purple-700 underline flex items-center gap-1 mt-1"
                                    >
                                        Test link <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </div>

                            {/* Game 3 - Water Capacity */}
                            <div className="space-y-2 p-4 bg-teal-50 rounded-lg border border-teal-200">
                                <Label htmlFor="whatsappLinkGame3" className="flex items-center gap-2 text-base font-semibold text-teal-700">
                                    <MessageSquare className="w-4 h-4" />
                                    Game 3: Water Capacity (Final Group)
                                </Label>
                                <Input
                                    id="whatsappLinkGame3"
                                    type="url"
                                    value={whatsappLinkGame3}
                                    onChange={(e) => setWhatsappLinkGame3(e.target.value)}
                                    placeholder="https://chat.whatsapp.com/..."
                                    className="rounded-xl border-2 border-teal-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
                                />
                                <p className="text-xs text-teal-600">
                                    Shown after completing Water Capacity game (Main community group)
                                </p>
                                {whatsappLinkGame3 && (
                                    <a
                                        href={whatsappLinkGame3}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-teal-600 hover:text-teal-700 underline flex items-center gap-1 mt-1"
                                    >
                                        Test link <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Announcement Section */}
                        <div className="space-y-4 pt-6 border-t-2 border-[#8558ed]/10">
                            <div className="flex items-center justify-between">
                                <Label className="flex items-center gap-2 text-lg font-semibold text-[#8558ed]">
                                    <Megaphone className="w-5 h-5" />
                                    Login Page Announcement
                                </Label>
                                <button
                                    type="button"
                                    onClick={() => setShowAnnouncement(!showAnnouncement)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium transition-colors ${showAnnouncement
                                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {showAnnouncement ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                    {showAnnouncement ? 'Visible' : 'Hidden'}
                                </button>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="announcementTitle">Announcement Title</Label>
                                <Input
                                    id="announcementTitle"
                                    value={announcementTitle}
                                    onChange={(e) => setAnnouncementTitle(e.target.value)}
                                    placeholder="e.g., Important Notice, New Rules, etc."
                                    className="rounded-xl border-2 border-[#8558ed]/20 focus:border-[#8558ed] focus:ring-4 focus:ring-[#8558ed]/10"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="announcementContent">Announcement Content</Label>
                                <div className="flex gap-2 mb-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => insertTag('b')}
                                        className="h-8 w-8 p-0"
                                        title="Bold"
                                    >
                                        <Bold className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => insertTag('i')}
                                        className="h-8 w-8 p-0"
                                        title="Italic"
                                    >
                                        <Italic className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => insertTag('mark')}
                                        className="h-8 w-8 p-0"
                                        title="Highlight"
                                    >
                                        <Highlighter className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => insertTag('ul')}
                                        className="h-8 w-8 p-0"
                                        title="List"
                                    >
                                        <List className="w-4 h-4" />
                                    </Button>
                                </div>
                                <textarea
                                    ref={textareaRef}
                                    id="announcementContent"
                                    value={announcementContent}
                                    onChange={(e) => setAnnouncementContent(e.target.value)}
                                    placeholder="Enter your announcement here..."
                                    rows={6}
                                    className="w-full rounded-xl border-2 border-[#8558ed]/20 focus:border-[#8558ed] focus:ring-4 focus:ring-[#8558ed]/10 p-3 font-mono text-sm"
                                />
                                <p className="text-xs text-gray-400 mt-1">
                                    Tip: Select text and click a button to format it.
                                </p>
                            </div>

                            {(announcementTitle || announcementContent) && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl"
                                >
                                    <p className="text-sm font-semibold text-blue-800 mb-2">Preview:</p>
                                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                                        {announcementTitle && (
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">{announcementTitle}</h3>
                                        )}
                                        {announcementContent && (
                                            <div
                                                className="text-gray-700 prose prose-sm max-w-none"
                                                dangerouslySetInnerHTML={{ __html: announcementContent }}
                                            />
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-gradient-to-r from-[#8558ed] to-[#b18aff] hover:from-[#7347d6] hover:to-[#a179f0] text-white font-semibold px-6"
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    {loading ? 'Saving...' : 'Save Settings'}
                                </Button>
                            </motion.div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
};
