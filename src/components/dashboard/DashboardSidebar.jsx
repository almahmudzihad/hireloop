

import {Bars, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";

export function DashboardSidebar() {
  const navItems = [
    {icon: House, label: "Home"},
    {icon: Magnifier, label: "Search"},
    {icon: Bell, label: "Notifications"},
    {icon: Envelope, label: "Messages"},
    {icon: Person, label: "Profile"},
    {icon: Gear, label: "Settings"},
  ];
  const navLinks = <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                  </button>
                ))}
              </nav>;

  return (
    <>
    <aside className="hidden w-72 flex-col gap-6 border-r border-white/10 py-6 px-4 lg:block">
        {navLinks}
    </aside>
    <Drawer>
      <Button className="lg:hidden" variant="secondary">
        <Bars />
        Sidebar
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              {navLinks}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
    </>
  );
}