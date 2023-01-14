import { SiLinkedin } from "react-icons/si";
import Image from "next/image";

export const Team = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center mb-14">
          <div className="relative" style={{ transform: "translateX(5px)" }}>
            <div
              style={{
                position: "absolute",
                borderRadius: "50%",
                height: "150px",
                width: "150px",
                background:
                  "linear-gradient(var(--color-primary), var(--color-secondary))",
                zIndex: -1,
                transform: "translateX(-10px)",
              }}
            />
            <Image
              height={150}
              width={150}
              alt="Shain"
              src="https://shainlafazan.com/shain.png"
              style={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
            />
          </div>
          <h3 className="text-2xl mt-2 mb-4 text-gradient font-bold">
            Shain Lafazan
          </h3>
          <p className="text-center px-4 mb-6">
            <a
              href="https://shainlafazan.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Shain"
              className="text-gradient"
            >
              Shain
            </a>{" "}
            built critical infrastructure for cybersecurity, medical imaging,
            and financial companies in Silicon Valley for a decade. Co-Founder
            of{" "}
            <a
              href="https://moleculeprotocol.io"
              target="_blank"
              rel="noopener noreferrer"
              title="Molecule Protocol"
              className="text-gradient"
            >
              Molecule Protocol
            </a>
            ,{" "}
            <a
              href="https://titans.finance"
              target="_blank"
              rel="noopener noreferrer"
              title="Titans Finance"
              className="text-gradient-both"
            >
              Titans Finance
            </a>
            , and{" "}
            <a
              href="https://stactica.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Stactica Software"
              className="text-gradient-reverse"
            >
              Stactica Software
            </a>
            . Strong background in cryptography.
          </p>
          <a
            href="https://linkedin.com/in/shainlafazan"
            target="_blank"
            rel="noopener noreferrer"
            title="Shain Lafazan's LinkedIn"
            className="text-gradient"
          >
            <SiLinkedin
              style={{
                height: "30px",
                width: "30px",
                fill: "#0072b1",
                background: "white",
                borderRadius: "3px",
              }}
            />
          </a>
        </div>
        <div className="flex flex-col items-center mb-14">
          <div className="relative" style={{ transform: "translateX(5px)" }}>
            <div
              style={{
                position: "absolute",
                borderRadius: "50%",
                height: "150px",
                width: "150px",
                background:
                  "linear-gradient(var(--color-primary), var(--color-secondary))",
                zIndex: -1,
                transform: "translateX(-10px)",
              }}
            />
            <Image
              height={150}
              width={150}
              alt="Ryan"
              src="https://media.licdn.com/dms/image/C5603AQFmncaB_JiB4Q/profile-displayphoto-shrink_400_400/0/1531697268092?e=1678320000&v=beta&t=cY2gGlO3taULJg7gaF9wDVoPZb8Ig3X_iHyPMRMVYE8"
              style={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
            />
          </div>
          <h3 className="text-2xl mt-2 mb-4 text-gradient-both font-bold">
            Ryan Lafazan
          </h3>
          <p className="text-center px-4 mb-6">
            <a
              href="https://www.linkedin.com/in/rjlafazan/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ryan"
              className="text-gradient"
            >
              Ryan
            </a>{" "}
            is the co-founder of{" "}
            <a
              href="https://stactica.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Stactica Software"
              className="text-gradient-reverse"
            >
              Stactica Software
            </a>
            , a software consulting company specializing in complete enterprise
            software and IT solutions. Ryan has a passion for technology,
            engineering, muy thai, security, and online privacy.
          </p>
          <a
            href="https://www.linkedin.com/in/rjlafazan/"
            target="_blank"
            rel="noopener noreferrer"
            title="Ryan Butler's LinkedIn"
          >
            <SiLinkedin
              style={{
                height: "30px",
                width: "30px",
                fill: "#0072b1",
                background: "white",
                borderRadius: "3px",
              }}
            />
          </a>
        </div>
        <div className="flex flex-col items-center mb-14">
          <div className="relative" style={{ transform: "translateX(5px)" }}>
            <div
              style={{
                position: "absolute",
                borderRadius: "50%",
                height: "150px",
                width: "150px",
                background:
                  "linear-gradient(var(--color-primary), var(--color-secondary))",
                zIndex: -1,
                transform: "translateX(-10px)",
              }}
            />
            <Image
              height={150}
              width={150}
              alt="Elon Musk"
              src="https://assets.website-files.com/6255afae011f05232dbd680b/625d975369b5b7dcef69a085_Untitled%20design%20-%202022-04-18T095219.099.png"
              style={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
            />
          </div>
          <h3 className="text-2xl mt-2 mb-4 text-gradient-reverse font-bold">
            Elon Musk
          </h3>
          <p className="text-center px-4 mb-6">
            <a
              href="https://stactica.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Elon"
              className="text-gradient"
            >
              Elon
            </a>{" "}
            is a serial inventor and product designer whose products are in use
            today solving problems and improving lives. He has deep knowledge of
            cartesian geometry, engineering, and manufacturing, among other
            fields.
          </p>
          <a
            href="https://stactica.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Elon Musk's LinkedIn"
          >
            <SiLinkedin
              style={{
                height: "30px",
                width: "30px",
                fill: "#0072b1",
                background: "white",
                borderRadius: "3px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Team;
