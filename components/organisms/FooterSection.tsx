"use client";

import { FooterLinks, CTASection } from "../molecules";

export const FooterSection = () => {
  return (
    <>
      {/* CTA Section */}
      <div className="w-full">
            <CTASection/>
      </div>

      {/* Footer Links */}
        <div className="w-full">
            <FooterLinks/>
        </div>
    </>
  );
};
