import React from "react";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="social-card flex flex-col gap-4 items-center">

      {/* GitHub Button */}
      <Link
        to="https://github.com/0vai5"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition w-48 justify-center"
      >
        <svg height="20" viewBox="0 0 496 512" fill="white">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 ..."/>
        </svg>
        GitHub
      </Link>

      {/* Follow LinkedIn Button */}
      <Link
        to="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=0vai5"
        target="_blank"
        rel="noopener noreferrer"
        className="w-48 h-9 flex items-center justify-center bg-[#0A66C2] text-white font-medium rounded-full hover:bg-[#004a96] transition"
      >
        Follow on LinkedIn
      </Link>
    </div>
  );
};

export default SocialLinks;
