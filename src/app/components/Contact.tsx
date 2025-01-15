import { Section } from "../../components/ui/section";
import { FaMailBulk, FaPhone } from "react-icons/fa";

interface ContactProps {
  contact: {
    email: string;
    tel: string;
    social: {
      name: string;
      url: string;
      icon: React.ElementType;
    }[];
  };
}

export function Contact({ contact }: ContactProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Contact
      </h2>
      <div className="flex gap-x-4 text-sm text-gray-600">
        {contact.email && (
          <a 
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-blue-500 hover:text-purple-400 transition-colors"
          >
            <FaMailBulk className="h-4 w-4" />
            {contact.email}
          </a>
        )}
        {contact.tel && (
          <a 
            href={`tel:${contact.tel}`}
            className="inline-flex items-center gap-2 text-blue-500 hover:text-purple-400 transition-colors"
          >
            <FaPhone className="h-4 w-4" />
            {contact.tel}
          </a>
        )}
        {contact.social.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="inline-flex items-center gap-2 text-blue-500 hover:text-purple-400 transition-colors"
          >
            <social.icon className="h-4 w-4" />
            {social.name}
          </a>
        ))}
      </div>
    </Section>
  );
} 