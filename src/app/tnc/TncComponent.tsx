import React from 'react';

const tncPoints = [
  "By accessing and using this site, you accept the following terms and conditions, without limitation or qualification.",

  "Unless otherwise stated, the contents of this site including, but not limited to, the text and images contained herein and their arrangement are the property of End Point IT Services Private Limited. All trademarks used or referred to in this website are the property of their respective owners.",
  
  "Nothing contained in this site shall be construed as conferring by implication, estoppel, or otherwise, any license or right to any copyright, patent, trademark or other proprietary interest of End Point IT Services Private Limited or any third party. This site and the content provided in this site, including, but not limited to, graphic images, audio, video, html code, buttons, and text, may not be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way, without the prior written consent of End Point IT Services Private Limited, except that you may download, display, and print one copy of the materials on any single computer solely for your personal, non-commercial use, provided that you do not modify the material in any way and you keep intact all copyright, trademark, and other proprietary notices.",

  "The information provided on this site is free of charge and for informational purposes only and does not create a business or professional services relationship between you and End Point IT Services Private Limited. Links on this site may lead to services or sites not operated by End Point IT Services Private Limited IO. No judgment or warranty is made with respect to such other services or sites and End Point IT Services Private Limited IO takes no responsibility for such other sites or services. A link to another site or service is not an endorsement of that site or service. Any use you make of the information provided on this site, or any site or service linked to by this site, is at your own risk.",

  "This site and its contents are provided as is and End Point IT Services Private Limited makes no representation or warranty of any kind with respect to this site or any site or service accessible through this site. End Point IT Services Private Limited expressly disclaims all express and implied warranties including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. In no event will either End Point IT Services Private Limited or its third-party service providers be liable to any party for any direct, indirect, incidental, special, exemplary, consequential, or other damages (including, but not limited to, lost profits, business interruption, loss of programs or data) without regard to the form of action and whether in contract, tort, negligence, strict liability, or otherwise, arising out of or in connection with this site, any content on or accessed through this site or any site service linked to, or any copying, displaying, or use thereof.",

  "End Point IT Services Private Limited maintains this site in India. By accessing and using this site, you agree that any legal action or proceeding relating to this site shall be governed by the laws of India. If you attempt to bring any legal proceedings against End Point IT Services Private Limited, you acknowledge that End Point IT Services Private Limited is free to choose the jurisdiction of our preference as to where such action against us may be held. As you have agreed by using this site, we will probably choose to defend any such action in India, and we can make this decision entirely as it suits us, without regard to where in the world you are located or from where in the world you visited this site.",
  "You are responsible for complying with the laws of the jurisdiction from which you are accessing this site and you agree that you will not access or use the information on this site in violation of such laws. Unless expressly stated otherwise herein, any information submitted by you through this site shall be deemed non-confidential and non-proprietary. You represent that you have the lawful right to submit such information and agree that you will not submit any information unless you are legally entitled to do so. Because of the open nature of the Internet, we recommend that you not submit information you consider confidential.",

  "End Point IT Services Private Limited does not accept unauthorized idea submissions outside of established business relationships. To protect the interests of our current clients and ourselves, we must treat the issue of such submissions with great care. Importantly, without a clear business relationship, End Point IT Services Private Limited cannot and does not treat any such submissions in confidence. Accordingly, please do not communicate unauthorized idea submissions to End Point IT Services Private Limited through this website. Any ideas disclosed to End Point IT Services Private Limited outside a pre-existing and documented confidential business relationship are not confidential and End Point IT Services Private Limited may therefore develop, use and freely disclose or publish similar ideas without compensating you or accounting to you. End Point IT Services Private Limited will make every reasonable effort to return or destroy any unauthorized idea submissions without detailed review of them. However, if a review is necessary in End Point IT Services Private Limited's sole discretion, it will be with the understanding that End Point IT Services Private Limited assumes no obligation to protect the confidentiality of your idea or compensate you for its disclosure or use. By submitting an idea or other detailed submission to End Point IT Services Private Limited through this website, you agree to be bound by the terms of this stated policy."
];
const TncComponent = () => {

  return (
    <section className='p-6 pt-30 bg-white font-sf-pro'>
    <div className='container mx-auto py-10 px-3 md:px-6 lg:px-12'>
      <h1 className="text-2xl font-bold mb-6 text-left text-gray-800">Terms and Conditions</h1>

      <div className="space-y-4">
        {tncPoints.map((point, index) => (
          <div 
            key={index} 
            className="text-gray-700 leading-relaxed flex items-start animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-2 h-2 bg-black mr-2 mt-2 flex-shrink-0"></div>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default TncComponent;