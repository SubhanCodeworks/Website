import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Code, Server, Smartphone, Database, Globe, Mail, Github, Layers, Terminal, Calendar, Cloud, Star } from "lucide-react"
import { Link } from "react-router-dom"

function TestimonialAvatar({ name, color }: { name: string, color: string }) {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-semibold`}>
      {initials}
    </div>
  );
}

export default function LandingPage() {
  const testimonials = [
    {
      text: "SubhanCodeWorks delivered an outstanding e-commerce platform that significantly boosted our online sales. Their expertise in the MERN stack + React Native was evident throughout the project.",
      name: "Kashif Majeed",
      company: "YesMart.inc",
      avatarColor: "bg-blue-500"
    },
    {
      text: "Working with SubhanCodeWorks was a game-changer for my services website. Their attention to detail and technical expertise made the development process smooth and efficient.",
      name: "Hesham Hamza",
      company: "( Individual )",
      avatarColor: "bg-green-500"
    },
    {
      text: "The React Native app developed by SubhanCodeWorks exceeded our expectations. It's fast, responsive, and works flawlessly on both iOS and Android devices.",
      name: "Kashif Majeed",
      company: "YesMart.inc",
      avatarColor: "bg-purple-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link className="flex items-center space-x-2" to="#">
            <Code className="h-6 w-6" />
            <span className="font-bold text-xl">SubhanCodeWorks</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {["Services", "Projects", "Testimonials", "Contact"].map((item) => (
              <Link key={item} className="text-sm font-medium hover:text-primary" to={`#${item.toLowerCase()}`}>
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              className="text-sm font-medium hover:text-primary"
              to="https://subhan-kashif-porfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </Link>
            <GithubButton username="SubhanCodeworks" />
            <GithubButton username="SubhanKashif3" />
            <Button asChild>
              <Link to="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Welcome to SubhanCodeWorks
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
              Expert JavaScript, MERN Stack, and React Native Development to Elevate Your Web and Mobile Projects
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" asChild>
                <Link to="#contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="https://subhan-kashif-porfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-muted">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Code, title: "Full-Stack JavaScript", desc: "End-to-end JavaScript solutions for web applications." },
                { icon: Server, title: "MERN Stack Development", desc: "MongoDB, Express.js, React, and Node.js expertise." },
                { icon: Smartphone, title: "React Native Development", desc: "Cross-platform mobile apps for iOS and Android." },
                { icon: Database, title: "Database Design", desc: "Efficient MongoDB schema design and optimization." },
                { icon: Globe, title: "RESTful API Development", desc: "Design and implementation of robust REST APIs." },
                { icon: Code, title: "Frontend Optimization", desc: "Performance tuning for React and React Native apps." },
              ].map((service, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6">
                  <service.icon className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "YesMart-v3",
                  desc: "YesMart v3 is the Official YesMart softwares group which include server, LPT, mobile client, local Admin for YesMart store in T.T singh",
                  icon: Layers,
                  color: "bg-blue-100 dark:bg-blue-900/20"
                },
                {
                  title: "Task Management App",
                  desc: "React-based frontend with Node.js backend for efficient task tracking.",
                  icon: Calendar,
                  color: "bg-green-100 dark:bg-green-900/20"
                },
                {
                  title: "Ultimate NoteTaker",
                  desc: "Interactive NoteTaking application with CRUD operations for NoteTaking with ReactNative + NodeJs",
                  icon: Terminal,
                  color: "bg-purple-100 dark:bg-purple-900/20"
                },
                {
                  title: "Cross-platform Mobile Weather App",
                  desc: "React Native Weather app for both iOS and Android platforms.",
                  icon: Cloud,
                  color: "bg-orange-100 dark:bg-orange-900/20"
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`h-48 ${project.color} flex flex-col items-center justify-center p-6`}>
                    <project.icon className="h-16 w-16 mb-4 text-primary" />
                    <div className="text-sm text-center text-muted-foreground">
                      {index % 2 === 0 ? 'Full Stack Application' : 'Mobile & Web App'}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex space-x-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Code className="h-4 w-4 mr-1" />
                        {index % 2 === 0 ? 'MERN Stack' : 'React Native'}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Globe className="h-4 w-4 mr-1" />
                        {index % 2 === 0 ? 'Web' : 'Cross-platform'}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="https://subhan-kashif-porfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-muted">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col justify-between">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <TestimonialAvatar 
                        name={testimonial.name} 
                        color={testimonial.avatarColor} 
                      />
                      <div className="ml-4">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-end">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-t from-background to-muted">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">Contact Information</CardTitle>
                <CardDescription className="text-center">Reach out to us via email or GitHub</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:ksubhank38@gmail.com" className="text-sm hover:underline">ksubhank38@gmail.com</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:subhancodeworks@gmail.com" className="text-sm hover:underline">subhancodeworks@gmail.com</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com/SubhanCodeworks" className="text-sm hover:underline">Github: SubhanCodeworks</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com/SubhanKashif3" className="text-sm hover:underline">Github: SubhanKashif3</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 SubhanCodeWorks. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link className="text-sm text-muted-foreground hover:text-foreground" to="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-muted-foreground hover:text-foreground" to="#">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

function GithubButton({ username }: { username: string }) {
  return (
    <Button variant="outline" size="sm" asChild>
      <Link
        to={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <GitHubLogoIcon className="h-4 w-4" />
        <span>{username}</span>
      </Link>
    </Button>
  )
}