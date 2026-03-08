import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone } from 'lucide-react';
import React, { useState } from 'react';

interface ScheduleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-blue-900/60 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-[60] overflow-hidden m-4 w-[calc(100%-2rem)]"
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-display font-bold text-blue-900">Schedule Service</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-blue-400 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Calendar className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-2">Request Received!</h3>
                                    <p className="text-blue-600">Our team will contact you shortly to confirm your appointment time.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-blue-900 mb-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                                            <input required type="text" className="w-full pl-10 pr-4 py-3 bg-blue-50 border border-blue-100 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-blue-900 mb-1">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                                            <input required type="tel" className="w-full pl-10 pr-4 py-3 bg-blue-50 border border-blue-100 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="(480) 555-0123" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-blue-900 mb-1">Preferred Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                                            <input required type="date" className="w-full pl-10 pr-4 py-3 bg-blue-50 border border-blue-100 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-blue-900" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-blue-900 mb-1">Service Needed</label>
                                        <select required className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-blue-900 appearance-none">
                                            <option value="">Select a service...</option>
                                            <option value="repair">AC Repair</option>
                                            <option value="install">System Installation</option>
                                            <option value="maintenance">Routine Maintenance</option>
                                            <option value="emergency">Emergency Service</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all mt-6">
                                        Request Appointment
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
