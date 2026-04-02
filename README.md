# Config-Driven UI Platform

A modern, flexible dashboard builder that allows you to create dynamic, responsive layouts entirely through JSON configuration. Build once, render anywhere.

![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black)
![React](https://img.shields.io/badge/React-19.2.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## 🎯 What is Config-Driven UI?

**Config-Driven UI** is an architectural pattern where the structure, layout, and behavior of user interfaces are defined through configuration data (typically JSON) rather than being hardcoded in the application. This approach offers several key advantages:

### Advantages

- **🔄 Runtime Flexibility** - Change layouts without redeploying code
- **🎨 Dynamic Customization** - Different users can have different layouts based on roles or preferences
- **♻️ Reusability** - Same component library can render multiple different layouts
- **🧪 A/B Testing** - Easy to test different layouts by switching configurations
- **🚀 Rapid Prototyping** - Design and test new layouts quickly without code changes
- **👥 Non-Technical Access** - Product managers and designers can modify layouts through config
- **📱 Multi-Platform** - Same config can drive web, mobile, or desktop interfaces
- **⚡ Performance** - Load only the components you need based on configuration

## 🚀 What This App Does

This platform provides:

1. **Visual Layout Builder** - Drag-and-drop interface to create dashboard layouts
2. **Multiple Panel Types** - Pre-built components for common use cases:
   - 📊 Activity Feed - Track recent actions and updates
   - ✅ Approvals - Manage pending approvals
   - 💬 Chat - Display recent messages
   - 📅 Calendar - Show upcoming events
   - 📝 Tasks - Manage task lists
   - 📌 Notes - Quick notes and reminders

3. **Flexible Layout Modes**
   - **List Mode** - Vertical stacking for simple layouts
   - **Grid Mode** - Multi-column layouts with precise positioning

4. **Real-Time Preview** - See changes instantly as you build
5. **JSON Export** - Copy configuration to use anywhere
6. **Responsive Design** - Automatically adapts to all screen sizes
7. **Panel Configuration** - Customize labels, visibility, position, and panel-specific settings

## 🏗️ Architecture

### Component Registry Pattern

The application uses a **Component Registry Pattern** to achieve config-driven rendering:

```typescript
// lib/panelRegistry.ts
const PANEL_REGISTRY: Record<PanelType, ComponentType<PanelProps>> = {
  'activity': ActivityPanel,
  'approvals': ApprovalsPanel,
  'chat': ChatPanel,
  'calendar': CalendarPanel,
  'tasks': TasksPanel,
  'notes': NotesPanel,
};

export function getPanelComponent(type: PanelType) {
  return PANEL_REGISTRY[type];
}
```

**How it Works:**

1. **Configuration Layer** - JSON defines what to render:
   ```json
   {
     "type": "activity",
     "label": "Activity Feed",
     "visible": true,
     "grid": { "row": 1, "col": 1, "colSpan": 2 }
   }
   ```

2. **Registry Lookup** - Maps panel type strings to React components
3. **Dynamic Rendering** - Components are rendered based on configuration at runtime
4. **Decoupling** - Configuration is separate from implementation

### Key Architecture Principles

- **Separation of Concerns** - Configuration data is separate from UI components
- **Type Safety** - TypeScript ensures configuration follows defined schemas
- **Composability** - Panels are self-contained and reusable
- **Extensibility** - New panel types can be added to the registry without changing core logic
- **Server Actions** - Next.js Server Actions for data persistence (in-memory)

### Project Structure

```
config-driven-ui/
├── app/
│   ├── page.tsx              # Landing page
│   ├── builder/              # Layout builder interface
│   ├── dashboard/            # Rendered dashboard view
│   └── how-it-works/         # Documentation page
├── components/
│   ├── PanelLibrary.tsx      # Available panels picker
│   ├── PanelCanvas.tsx        # Drag-drop builder
│   ├── PanelConfiguration.tsx # Property editor
│   ├── PreviewRenderer.tsx    # Live preview
│   └── JsonViewer.tsx         # Config viewer
├── panels/
│   ├── ActivityPanel.tsx
│   ├── ApprovalsPanel.tsx
│   ├── ChatPanel.tsx
│   ├── CalendarPanel.tsx
│   ├── TasksPanel.tsx
│   └── NotesPanel.tsx
├── lib/
│   ├── types.ts              # TypeScript interfaces
│   ├── panelRegistry.ts      # Component registry
│   ├── panelMetadata.ts      # Panel descriptions
│   ├── defaultConfig.ts      # Default layout
│   └── configActions.ts      # Server actions
```

## 🔧 Technology Stack

- **Framework**: Next.js 16.2.2 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Drag & Drop**: @dnd-kit
- **State Management**: React Hooks (useState, useEffect)
- **Data Handling**: localStorage (client-side persistence)

## 📝 Important Notes

### ⚠️ No Database / Client-Side Storage

- **localStorage Only** - Configuration is stored in browser's localStorage (5-10MB limit)
- **Browser-Specific** - Saved layouts are specific to each browser/device
- **Cleared with Browser Data** - Clearing browser storage will delete saved layouts
- **Client-Side Only** - No server-side persistence or database
- **Development Mode** - This is a demonstration/prototype application
- **No Authentication** - No user accounts or access control
- **Single Configuration** - Only one layout can be saved per browser

### 🎭 Dummy Data

- **All panels use mock data** - Activity feeds, tasks, messages, etc. are hardcoded
- **No real APIs** - No integration with backend services
- **Static Content** - Data does not update in real-time
- **Demonstration Purpose** - Showcases UI patterns, not actual functionality

### 🔮 Future Enhancements (Not Implemented)

- Database integration (PostgreSQL, MongoDB)
- Multi-user support with authentication
- Multiple saved layouts per user
- Real API integrations
- Panel data customization
- Export to different formats
- Version control for configurations
- Undo/Redo functionality

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd config-driven-ui

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎨 Usage

1. **Start Building** - Visit the homepage and click "Get Started"
2. **Add Panels** - Select panel types from the library
3. **Arrange Layout** - Drag panels to reorder, configure properties
4. **Choose Mode** - Switch between List and Grid layouts
5. **Configure Panels** - Set labels, visibility, grid positions
6. **Preview** - See live preview of your layout
7. **Save** - Save and view on the dashboard
8. **Export** - Copy JSON configuration for use elsewhere

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Related Concepts

- [Config-Driven Architecture](https://www.patterns.dev/posts/runtime-vs-buildtime-config)
- [Component Registry Pattern](https://kentcdodds.com/blog/introducing-the-react-testing-library)
- [Drag and Drop with dnd-kit](https://docs.dndkit.com/)

## 📄 License

This project is a demonstration/prototype application.

## 🤝 Contributing

This is a learning/demonstration project. Feel free to fork and experiment!

---

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
