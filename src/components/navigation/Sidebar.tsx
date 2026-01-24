export interface SidebarProps {
  items: SidebarItem[]
  isOpen?: boolean
  onClose?: () => void
}

export interface SidebarItem {
  label: string
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
  active?: boolean
}

export function Sidebar({ items, isOpen = true, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          onClick={onClose}
          className="fixed inset-0 z-30 md:hidden"
        />
      )}

      <aside
        className={`fixed left-0    bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform z-40 md:static md:transform-none md:h-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 space-y-2 h-full overflow-y-auto">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                item.onClick?.()
                onClose?.()
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                item.active
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.icon && <span>{item.icon}</span>}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  )
}
