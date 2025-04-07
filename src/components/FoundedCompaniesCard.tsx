
import React from 'react';
import { Badge } from '@/components/ui/badge';

type Company = {
  name: string;
  status: string;
  statusColor: string;
  description: string;
};

const companies: Company[] = [
  {
    name: 'Vertx',
    status: 'CEO',
    statusColor: 'bg-vertx-green',
    description: 'Founded in 2025, in Fintech.',
  },
  {
    name: 'Company',
    status: 'PROPRIETOR',
    statusColor: 'bg-vertx-blue',
    description: 'Founded in 2023. Acquired by abc in QuickCommerce.',
  },
];

const FoundedCompaniesCard: React.FC = () => {
  return (
    <div className="bg-vertx-gray rounded-xl p-6 h-full">
      <div className="flex items-baseline justify-between mb-6">
        <h3 className="text-lg font-bold">Founded Companies</h3>
        <span className="text-6xl font-bold text-vertx-purple opacity-80">02</span>
      </div>
      <div className="space-y-6">
        {companies.map((company, index) => (
          <div key={index} className="border-t border-vertx-gray-light pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-bold">{company.name}</h4>
                  <Badge className={`${company.statusColor} text-white`}>
                    {company.status}
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm mt-1">{company.description}</p>
              </div>
              <a
                href="#"
                className="text-vertx-purple text-sm hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundedCompaniesCard;
