'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, Heart, CreditCard, Building } from 'lucide-react'

interface DonateModalProps {
  isOpen: boolean
  onClose: () => void
}

const DonateModal = ({ isOpen, onClose }: DonateModalProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const paymentDetails = {
    mpesa: {
      payBillNo: "522522",
      accountName: "Taka Kazi Africa"
    },
    bank: {
      accountNo: "1313 175 137",
      bankName: "KCB BANK",
      accountName: "Taka Kazi Africa"
    }
  }

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Full Screen Modal */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 100 }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-20 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            {/* Content */}
            <div className="p-8 sm:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full">
                    <Heart className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Support Our Mission
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Your support helps us create sustainable environmental solutions and empower 
                  communities across Africa. Every contribution makes a difference.
                </p>
              </div>

              {/* Payment Methods Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* MPESA Payment */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl border-2 border-green-200 dark:border-green-700"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 bg-green-600 rounded-full">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 text-center mb-8">
                    MPESA Payment
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pay Bill Number</p>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-green-700 dark:text-green-300">
                            {paymentDetails.mpesa.payBillNo}
                          </span>
                          <button
                            onClick={() => copyToClipboard(paymentDetails.mpesa.payBillNo, 'mpesa-paybill')}
                            className="p-2 hover:bg-green-100 dark:hover:bg-green-800 rounded-lg transition-colors"
                          >
                            <Copy className="w-5 h-5 text-green-600" />
                          </button>
                        </div>
                        {copiedField === 'mpesa-paybill' && (
                          <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-green-600 block mt-2"
                          >
                            ✓ Copied to clipboard!
                          </motion.span>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Account Name</p>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-green-700 dark:text-green-300">
                            {paymentDetails.mpesa.accountName}
                          </span>
                          <button
                            onClick={() => copyToClipboard(paymentDetails.mpesa.accountName, 'mpesa-account')}
                            className="p-2 hover:bg-green-100 dark:hover:bg-green-800 rounded-lg transition-colors"
                          >
                            <Copy className="w-5 h-5 text-green-600" />
                          </button>
                        </div>
                        {copiedField === 'mpesa-account' && (
                          <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-green-600 block mt-2"
                          >
                            ✓ Copied to clipboard!
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-green-600 text-white rounded-xl text-center">
                    <p className="font-semibold">Quick Steps:</p>
                    <p className="text-sm mt-2">Go to M-PESA → Pay Bill → Enter {paymentDetails.mpesa.payBillNo} → Account: {paymentDetails.mpesa.accountName}</p>
                  </div>
                </motion.div>

                {/* Bank Transfer */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 bg-blue-600 rounded-full">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 text-center mb-8">
                    Bank Transfer
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Bank Name</p>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border">
                        <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                          {paymentDetails.bank.bankName}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Account Number</p>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                            {paymentDetails.bank.accountNo}
                          </span>
                          <button
                            onClick={() => copyToClipboard(paymentDetails.bank.accountNo, 'bank-account')}
                            className="p-2 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-lg transition-colors"
                          >
                            <Copy className="w-5 h-5 text-blue-600" />
                          </button>
                        </div>
                        {copiedField === 'bank-account' && (
                          <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-blue-600 block mt-2"
                          >
                            ✓ Copied to clipboard!
                          </motion.span>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Account Name</p>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                            {paymentDetails.bank.accountName}
                          </span>
                          <button
                            onClick={() => copyToClipboard(paymentDetails.bank.accountName, 'bank-name')}
                            className="p-2 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-lg transition-colors"
                          >
                            <Copy className="w-5 h-5 text-blue-600" />
                          </button>
                        </div>
                        {copiedField === 'bank-name' && (
                          <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-blue-600 block mt-2"
                          >
                            ✓ Copied to clipboard!
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Impact Message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center mt-12 p-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Your Impact Matters</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm opacity-90">Trees Planted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm opacity-90">Communities Reached</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500T</div>
                    <div className="text-sm opacity-90">Waste Recycled</div>
                  </div>
                </div>
                <p className="mt-6 text-lg opacity-90">
                  Thank you for supporting sustainable development in Africa! 🌍
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DonateModal