import { useState } from 'react'
import ThemePanel from './components/ThemePanel'
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
  Select,
  Textarea,
  Alert,
} from './components'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [selectedOption, setSelectedOption] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowAlert(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-primary-500 mb-2">Component Demo</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Browse and test all available UI components
            </p>
          </div>

          {/* Alert */}
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} className="mb-6">
              Form submitted successfully! Your message has been received.
            </Alert>
          )}

          {/* Buttons Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger" size="sm">
                  Danger
                </Button>
                <Button size="lg">Large Button</Button>
              </div>
            </CardContent>
          </Card>

          {/* Badges Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="warning">Warning</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Form Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  helpText="We'll never share your email"
                  required
                />

                <Select
                  label="Select an option"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                  ]}
                />

                <Textarea
                  label="Message"
                  placeholder="Enter your message..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <CardFooter className="mt-6">
                  <Button type="submit">Submit Form</Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() =>
                      setFormData({ name: '', email: '', message: '' })
                    }
                  >
                    Reset
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>

          {/* Alerts Section */}
          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert variant="info">This is an info alert</Alert>
              <Alert variant="success">This is a success alert</Alert>
              <Alert variant="warning">This is a warning alert</Alert>
              <Alert variant="error">This is an error alert</Alert>
            </CardContent>
          </Card>
        </div>
      </div>
      <ThemePanel />
    </>
  )
}

export default App
