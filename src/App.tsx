import { useState } from 'react'
import ThemePanel from './components/ThemePanel'
import {
  // Base Components
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Select,
  Textarea,
  Alert,
  // Form Components
  Checkbox,
  RadioGroup,
  Toggle,
  Slider,
  // Feedback Components
  Toast,
  Tooltip,
  ProgressBar,
  Spinner,
  Skeleton,
  // Navigation Components
  Tabs,
  Breadcrumb,
  Pagination,
  Navbar,
  Sidebar,
  // Layout Components
  Modal,
  Drawer,
  Divider,
  Avatar,
  HStack,
  VStack,
  // Data Components
  Table,
  List,
  Dropdown,
} from './components'

function App() {
  const [showAlert, setShowAlert] = useState(false)

  // Form components state
  const [checkbox, setCheckbox] = useState(false)
  const [radioValue, setRadioValue] = useState('option1')
  const [toggle, setToggle] = useState(false)
  const [slider, setSlider] = useState(50)

  // Modal & Drawer state
  const [showModal, setShowModal] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  const [showToast, setShowToast] = useState(false)

  // Navigation state
  const [currentPage, setCurrentPage] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Table data
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  ]

  // List items
  const listItems = [
    { id: 1, label: 'Learn React' },
    { id: 2, label: 'Build Components' },
    { id: 3, label: 'Deploy to Production' },
  ]

  // Sidebar items
  const sidebarItems = [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Components', icon: '🎨', active: true },
    { label: 'Settings', icon: '⚙️' },
  ]

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Demo', href: '#' },
  ]

  return (
    <>
      <Navbar
        title="Component Library"
        items={[
          { label: 'Home', onClick: () => {} },
          { label: 'Docs', onClick: () => {} },
        ]}
        logo="🎨"
      />

      <div className="flex">
        <Sidebar items={sidebarItems} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-950 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-primary-500 mb-2">Component Library Demo</h1>
              <Breadcrumb items={breadcrumbItems} />
            </div>

            {/* Alert */}
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} className="mb-6">
                Demo submitted successfully!
              </Alert>
            )}

            {showToast && (
              <Toast
                message="All components are working! 🎉"
                type="success"
                duration={3000}
                onClose={() => setShowToast(false)}
              />
            )}

            {/* BASE COMPONENTS */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Base Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Buttons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Buttons</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="danger">Danger</Button>
                      <Button size="sm">Small</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>

                  <Divider />

                  {/* Badges */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Badges</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="danger">Danger</Badge>
                      <Badge variant="warning">Warning</Badge>
                    </div>
                  </div>

                  <Divider />

                  {/* Inputs */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Form Inputs</h3>
                    <div className="space-y-4">
                      <Input label="Text Input" placeholder="Enter text..." />
                      <Textarea label="Textarea" placeholder="Enter message..." rows={3} />
                      <Select
                        label="Select"
                        options={[
                          { value: '1', label: 'Option 1' },
                          { value: '2', label: 'Option 2' },
                        ]}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FORM COMPONENTS */}
              <Card>
                <CardHeader>
                  <CardTitle>Form Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Checkbox</h3>
                      <Checkbox
                        label="I agree to terms"
                        checked={checkbox}
                        onChange={(e) => setCheckbox(e.target.checked)}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Toggle</h3>
                      <Toggle
                        label="Enable notifications"
                        checked={toggle}
                        onChange={(e) => setToggle(e.target.checked)}
                      />
                    </div>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Radio Group</h3>
                    <RadioGroup
                      label="Choose one"
                      options={[
                        { label: 'Option 1', value: 'option1' },
                        { label: 'Option 2', value: 'option2' },
                        { label: 'Option 3', value: 'option3' },
                      ]}
                      value={radioValue}
                      onChange={setRadioValue}
                    />
                  </div>

                  <Divider />

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Slider</h3>
                    <Slider label="Volume" min={0} max={100} value={slider} onChange={setSlider} />
                  </div>
                </CardContent>
              </Card>

              {/* FEEDBACK COMPONENTS */}
              <Card>
                <CardHeader>
                  <CardTitle>Feedback Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Spinner</h3>
                      <Spinner size="md" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Avatar</h3>
                      <Avatar initials="JD" size="lg" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Tooltip</h3>
                      <Tooltip content="This is a tooltip!">
                        <Button>Hover me</Button>
                      </Tooltip>
                    </div>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Progress Bar</h3>
                    <div className="space-y-3">
                      <ProgressBar value={65} max={100} variant="info" showLabel />
                      <ProgressBar value={80} max={100} variant="success" showLabel />
                      <ProgressBar value={45} max={100} variant="warning" showLabel />
                    </div>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Skeleton</h3>
                    <div className="space-y-2">
                      <Skeleton width="100%" height="20px" />
                      <Skeleton width="80%" height="20px" />
                      <Skeleton width="60%" height="20px" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* NAVIGATION COMPONENTS */}
              <Card>
                <CardHeader>
                  <CardTitle>Navigation Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Tabs</h3>
                    <Tabs
                      tabs={[
                        { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
                        { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
                        { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' },
                      ]}
                    />
                  </div>

                  <Divider />

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Pagination</h3>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={5}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* LAYOUT COMPONENTS */}
              <Card>
                <CardHeader>
                  <CardTitle>Layout Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <Button onClick={() => setShowModal(true)}>Open Modal</Button>
                    <Button onClick={() => setShowDrawer(true)}>Open Drawer</Button>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Stacks</h3>
                    <VStack gap="md" className="mb-4">
                      <Button>Stack Item 1</Button>
                      <Button>Stack Item 2</Button>
                      <Button>Stack Item 3</Button>
                    </VStack>
                  </div>
                </CardContent>
              </Card>

              {/* DATA COMPONENTS */}
              <Card>
                <CardHeader>
                  <CardTitle>Data Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Table</h3>
                    <Table
                      columns={[
                        { key: 'name', label: 'Name' },
                        { key: 'email', label: 'Email' },
                        { key: 'role', label: 'Role' },
                      ]}
                      data={tableData}
                    />
                  </div>

                  <Divider />

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">List</h3>
                    <List items={listItems} />
                  </div>

                  <Divider />

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Dropdown</h3>
                    <Dropdown
                      trigger={<Button>Menu</Button>}
                      items={[
                        { label: 'Edit' },
                        { label: 'Delete', divider: true },
                        { label: 'Share' },
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Modal */}
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title="Example Modal"
              footer={
                <HStack justify="end" gap="md">
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setShowModal(false)}>Confirm</Button>
                </HStack>
              }
            >
              <p>This is a modal component. Click the button below or outside to close it.</p>
            </Modal>

            {/* Drawer */}
            <Drawer
              isOpen={showDrawer}
              onClose={() => setShowDrawer(false)}
              title="Example Drawer"
              footer={
                <Button onClick={() => setShowDrawer(false)}>Close</Button>
              }
            >
              <p>This is a drawer component that slides in from the side.</p>
              <p className="mt-4">You can put any content here!</p>
            </Drawer>
          </div>
        </div>
      </div>

      <ThemePanel />
    </>
  )
}

export default App
