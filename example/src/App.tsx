import {
  VibeUIProvider,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Switch,
  Chip,
  Alert,
  Spinner,
  Progress,
  Avatar,
  Badge,
} from "vibe-ui-library";
import {
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon,
  BoltIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("buttons");

  return (
    <VibeUIProvider>
      <div className="min-h-screen p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <SparklesIcon className="h-10 w-10 text-[#ff0080]" />
            <Typography
              variant="h1"
              className="text-5xl font-bold bg-gradient-to-r from-[#ff0080] to-[#9c27b0] bg-clip-text text-transparent"
            >
              Vibe Tailwind Library
            </Typography>
            <SparklesIcon className="h-10 w-10 text-[#9c27b0]" />
          </div>
          <Typography className="text-blue-gray-300 text-lg max-w-2xl mx-auto">
            A Material Tailwind wrapper with a vibrant pink theme. Ready to use
            components with zero configuration.
          </Typography>

          {/* Color Palette */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ff0080] shadow-lg shadow-pink-500/50" />
              <span className="text-blue-gray-300 text-sm font-mono">
                #ff0080
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#9c27b0] shadow-lg shadow-purple-500/50" />
              <span className="text-blue-gray-300 text-sm font-mono">
                #9c27b0
              </span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex justify-center gap-2">
            {[
              { value: "buttons", label: "🎯 Buttons" },
              { value: "cards", label: "🃏 Cards" },
              { value: "forms", label: "📝 Forms" },
              { value: "feedback", label: "💬 Feedback" },
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveTab(value)}
                className={`py-3 px-6 text-base font-bold transition-all duration-200 rounded-lg ${
                  activeTab === value
                    ? "border-2 border-[#ff0080] text-[#ff0080] shadow-lg shadow-pink-500/30"
                    : "text-white hover:text-[#ff0080] border-2 border-transparent"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {/* Buttons Section */}
          {activeTab === "buttons" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    Button Variants
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-wrap gap-3">
                  <Button color="pink">Filled</Button>
                  <Button color="pink" variant="outlined">
                    Outlined
                  </Button>
                  <Button color="pink" variant="gradient">
                    Gradient
                  </Button>
                  <Button color="pink" variant="text">
                    Text
                  </Button>
                </CardBody>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    Button Sizes
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-wrap items-center gap-3">
                  <Button color="pink" size="sm">
                    Small
                  </Button>
                  <Button color="pink" size="md">
                    Medium
                  </Button>
                  <Button color="pink" size="lg">
                    Large
                  </Button>
                </CardBody>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    With Icons
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-wrap gap-3">
                  <Button color="pink" className="flex items-center gap-2">
                    <HeartIcon className="h-5 w-5" /> Like
                  </Button>
                  <Button
                    color="pink"
                    variant="gradient"
                    className="flex items-center gap-2"
                  >
                    <RocketLaunchIcon className="h-5 w-5" /> Launch
                  </Button>
                  <Button
                    color="purple"
                    variant="outlined"
                    className="flex items-center gap-2"
                  >
                    <BoltIcon className="h-5 w-5" /> Boost
                  </Button>
                </CardBody>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    Purple Variant
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-wrap gap-3">
                  <Button className="bg-[#9c27b0] text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/40">
                    Filled
                  </Button>
                  <Button
                    variant="outlined"
                    className="border-[#9c27b0] text-[#9c27b0]"
                  >
                    Outlined
                  </Button>
                  <Button className="bg-gradient-to-tr from-[#9c27b0] to-[#ce93d8] text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/40">
                    Gradient
                  </Button>
                  <Button
                    variant="text"
                    className="text-[#9c27b0] hover:bg-purple-500/10"
                  >
                    Text
                  </Button>
                </CardBody>
              </Card>
            </div>
          )}

          {/* Cards Section */}
          {activeTab === "cards" && (
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-[#ff0080]/20 to-white/90 backdrop-blur-sm border border-[#ff0080]/30">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#ff0080]/20">
                      <HeartIcon className="h-8 w-8 text-[#ff0080]" />
                    </div>
                    <Typography
                      variant="h5"
                      className="text-gray-800 font-bold"
                    >
                      Feature One
                    </Typography>
                  </div>
                </CardHeader>
                <CardBody>
                  <Typography className="text-gray-700">
                    Beautiful pre-styled components with the vibrant pink theme
                    applied automatically.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button color="pink" size="sm">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-[#9c27b0]/20 to-white/90 backdrop-blur-sm border border-[#9c27b0]/30">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#9c27b0]/20">
                      <SparklesIcon className="h-8 w-8 text-[#9c27b0]" />
                    </div>
                    <Typography
                      variant="h5"
                      className="text-gray-800 font-bold"
                    >
                      Feature Two
                    </Typography>
                  </div>
                </CardHeader>
                <CardBody>
                  <Typography className="text-gray-700">
                    Zero configuration needed. Just wrap your app with
                    VibeUIProvider and go!
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button color="purple" size="sm">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-gray-100 to-white backdrop-blur-sm border border-gray-200">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gray-200">
                      <RocketLaunchIcon className="h-8 w-8 text-gray-700" />
                    </div>
                    <Typography
                      variant="h5"
                      className="text-gray-800 font-bold"
                    >
                      Feature Three
                    </Typography>
                  </div>
                </CardHeader>
                <CardBody>
                  <Typography className="text-gray-700">
                    Full TypeScript support and complete Material Tailwind
                    component library.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button color="pink" variant="outlined" size="sm">
                    Explore
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Forms Section */}
          {activeTab === "forms" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    Input Fields
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <Input
                    label="Email"
                    color="pink"
                    className="text-white"
                    crossOrigin={undefined}
                  />
                  <Input
                    label="Password"
                    type="password"
                    color="pink"
                    className="text-white"
                    crossOrigin={undefined}
                  />
                  <Input
                    label="With Icon"
                    color="pink"
                    icon={<StarIcon className="h-5 w-5 text-[#ff0080]" />}
                    className="text-white"
                    crossOrigin={undefined}
                  />
                </CardBody>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    Toggles & Checks
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      color="pink"
                      defaultChecked
                      crossOrigin={undefined}
                    />
                    <Typography className="text-blue-gray-300">
                      Enable notifications
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox color="purple" crossOrigin={undefined} />
                    <Typography className="text-blue-gray-300">
                      Subscribe to newsletter
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch
                      color="pink"
                      defaultChecked
                      crossOrigin={undefined}
                    />
                    <Typography className="text-blue-gray-300">
                      Dark mode
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch color="purple" crossOrigin={undefined} />
                    <Typography className="text-blue-gray-300">
                      Auto-save
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}

          {/* Feedback Section */}
          {activeTab === "feedback" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    Alerts
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-3">
                  <Alert color="pink" className="bg-[#ff0080]">
                    <SparklesIcon className="h-5 w-5 inline mr-2" />
                    This is a pink alert!
                  </Alert>
                  <Alert color="purple" className="bg-[#9c27b0]">
                    <BoltIcon className="h-5 w-5 inline mr-2" />
                    This is a purple alert!
                  </Alert>
                </CardBody>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    Chips
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-wrap gap-3">
                  <Chip value="Pink" color="pink" className="bg-[#ff0080]" />
                  <Chip
                    value="Purple"
                    color="purple"
                    className="bg-[#9c27b0]"
                  />
                  <Chip
                    value="Outlined"
                    variant="outlined"
                    className="border-[#ff0080] text-[#ff0080]"
                  />
                  <Chip
                    value="Gradient"
                    className="bg-gradient-to-r from-[#ff0080] to-[#9c27b0]"
                  />
                </CardBody>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    Loading States
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <Spinner color="pink" className="h-8 w-8 text-[#ff0080]" />
                    <Spinner
                      color="purple"
                      className="h-8 w-8 text-[#9c27b0]"
                    />
                    <Spinner className="h-8 w-8 text-white" />
                  </div>
                  <div className="w-full">
                    <Typography className="text-blue-gray-300 mb-2 text-sm">
                      Progress: 75%
                    </Typography>
                    <Progress
                      value={75}
                      color="pink"
                      className="bg-white/10"
                      barProps={{ className: "bg-[#ff0080]" }}
                    />
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="bg-transparent"
                >
                  <Typography variant="h5" className="text-white">
                    Avatars & Badges
                  </Typography>
                </CardHeader>
                <CardBody className="flex items-center gap-4">
                  <Badge content="5" className="bg-[#ff0080] border-0">
                    <Avatar
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200"
                      alt="avatar"
                      size="lg"
                      className="border-2 border-[#ff0080]"
                    />
                  </Badge>
                  <Badge
                    content=""
                    className="bg-[#9c27b0] border-0 min-w-[12px] min-h-[12px]"
                  >
                    <Avatar
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200"
                      alt="avatar"
                      size="lg"
                      className="border-2 border-[#9c27b0]"
                    />
                  </Badge>
                  <Avatar
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                    alt="avatar"
                    size="lg"
                    className="border-2 border-white/30"
                  />
                </CardBody>
              </Card>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <Typography className="text-blue-gray-400">
            Built with <HeartIcon className="h-4 w-4 inline text-[#ff0080]" />{" "}
            using Material Tailwind
          </Typography>
          <Typography className="text-blue-gray-500 text-sm mt-2">
            npm install vibe-ui-library @material-tailwind/react tailwindcss
          </Typography>
        </footer>
      </div>
    </VibeUIProvider>
  );
}

export default App;
