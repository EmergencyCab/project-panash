import { useEffect, useState } from "react";
import { School, Users, Award, TrendingUp } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { icon: School, value: 3, label: "Schools Reached", suffix: "" },
  { icon: Users, value: 45, label: "Students Impacted", suffix: "+" },
  { icon: Award, value: 3, label: "Competitions Completed", suffix: "" },
  { icon: TrendingUp, value: 100, label: "Success Rate", suffix: "%" },
];

const Counter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-medium hover:shadow-large transition-smooth text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-hero flex items-center justify-center shadow-soft">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;