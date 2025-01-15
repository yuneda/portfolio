import { Section } from "../../components/ui/section";
import { 
  Card,
  CardHeader,
  CardContent 
} from "../../components/ui/card";
import { RESUME_DATA } from "../../data/resume-data";

interface ExperienceProps {
  experience: (typeof RESUME_DATA)["work"];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Work Experience
      </h2>
      <div className="flex flex-col gap-8">
        {experience.map((work: any) => {
          return (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none text-blue-500">
                    <a className="hover:text-purple-400 transition-colors" href={work.link}>
                      {work.company}
                    </a>
                  </h3>
                  <div className="text-sm tabular-nums text-purple-400">
                    {work.start} - {work.end}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none text-teal-500">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs text-gray-600">
                {work.description}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
} 