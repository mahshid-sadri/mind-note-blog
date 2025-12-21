import React, { useEffect } from 'react';

export const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-custom-black dark:text-white tracking-tight mb-8">
        Terms & Conditions
      </h1>
      <p className="text-sm text-custom-mediumGray dark:text-custom-darkTextMuted mb-12">
        Last updated: October 26, 2023
      </p>

      <div className="prose prose-lg dark:prose-invert hover:prose-a:text-blue-600">
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing and using MindNote (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. 
          In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such 
          services.
        </p>

        <h3>2. Intellectual Property</h3>
        <p>
          The site and its original content, features, and functionality are owned by MindNote and are protected by international copyright, 
          trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>

        <h3>3. User Conduct</h3>
        <p>
          You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone 
          else's use and enjoyment of the Website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, 
          transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Website.
        </p>

        <h3>4. Disclaimer</h3>
        <p>
          The materials on MindNote's website are provided on an 'as is' basis. MindNote makes no warranties, expressed or implied, 
          and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, 
          fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h3>5. Limitations</h3>
        <p>
          In no event shall MindNote or its suppliers be liable for any damages (including, without limitation, damages for loss of data or 
          profit, or due to business interruption) arising out of the use or inability to use the materials on MindNote's website, even if 
          MindNote or a MindNote authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h3>6. Accuracy of Materials</h3>
        <p>
          The materials appearing on MindNote's website could include technical, typographical, or photographic errors. MindNote does 
          not warrant that any of the materials on its website are accurate, complete, or current. MindNote may make changes to the materials 
          contained on its website at any time without notice.
        </p>

        <h3>7. Links</h3>
        <p>
          MindNote has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
          The inclusion of any link does not imply endorsement by MindNote of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h3>8. Modifications</h3>
        <p>
          MindNote may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be 
          bound by the then current version of these terms of service.
        </p>
      </div>
    </div>
  );
};
