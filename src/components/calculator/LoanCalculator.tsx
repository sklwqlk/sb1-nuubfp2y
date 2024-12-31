import React, { useState, useCallback } from 'react';
import { Calculator, DollarSign, Calendar } from 'lucide-react';

export default function LoanCalculator() {
  const [price, setPrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [term, setTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(4.5);

  const calculateMonthlyPayment = useCallback(() => {
    const loanAmount = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
                          (Math.pow(1 + monthlyRate, term) - 1);
    return Math.round(monthlyPayment);
  }, [price, downPayment, term, interestRate]);

  return (
    <section className="py-12 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#282828] rounded-xl p-6 md:p-8">
          <div className="flex items-center mb-6">
            <Calculator className="h-6 w-6 text-[#E7F63C] mr-2" />
            <h2 className="text-2xl font-bold text-white">Loan Calculator</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Car Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-2 bg-[#333] border border-gray-600 rounded-md text-white focus:ring-[#E7F63C] focus:border-[#E7F63C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Down Payment
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-2 bg-[#333] border border-gray-600 rounded-md text-white focus:ring-[#E7F63C] focus:border-[#E7F63C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Loan Term (months)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-2 bg-[#333] border border-gray-600 rounded-md text-white focus:ring-[#E7F63C] focus:border-[#E7F63C]"
                >
                  <option value={36}>36 months</option>
                  <option value={48}>48 months</option>
                  <option value={60}>60 months</option>
                  <option value={72}>72 months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Interest Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full pl-4 pr-4 py-2 bg-[#333] border border-gray-600 rounded-md text-white focus:ring-[#E7F63C] focus:border-[#E7F63C]"
              />
            </div>

            <div className="bg-[#333] rounded-lg p-6 mt-6">
              <h3 className="text-lg font-medium text-white mb-2">Monthly Payment</h3>
              <p className="text-3xl font-bold text-[#E7F63C]">
                ${calculateMonthlyPayment().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}