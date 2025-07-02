import { GithubIcon, LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";

interface ContactProps {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  xLabel: string;
  linkeninLabel: string;
  linkenin: string;
  githubLabel: string;
  github: string;
}

const Contact = ({
  title = "Contact",
  description = "Social Media and Email",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "pramadito@gmail.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Fri, 9am-5pm.",
  phone = "+123 456 7890",
  xLabel = "",
  linkeninLabel = "Linken In",
  linkenin = "https://linkedin.com/in/pramadito",
  githubLabel = "Github",
  github = "https://github.com/pramadito"
}: ContactProps) => {
   return (
    <div id="contact" className="container mx-auto lg:px-12 px-3">
    <section className="bg-background py-32">
      <div className="container">
        <div className="mb-14">
          <h1 className="mt-2 mb-3 text-3xl font-semibold text-balance lg:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <LinkedinIcon className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{linkeninLabel}</p>
           
             <a
              href={`${linkenin}`}
              className="font-semibold hover:underline"
            >
              {linkenin}
            </a>
          </div>
          
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <GithubIcon className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{githubLabel}</p>
           
             <a
              href={`${github}`}
              className="font-semibold hover:underline"
            >
              {github}
            </a>
          </div>
          
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact