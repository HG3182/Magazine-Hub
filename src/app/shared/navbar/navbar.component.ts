import { Component } from '@angular/core';



interface MenuItem {
  name: string;
  hasSubmenu: boolean;
  submenuItems?: string[];
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isSearchOpen = false;
  isMobileMenuOpen = false;
  openSubmenu: string | null = null; // Track which submenu is open

  menuItems: MenuItem[] = [
    { name: 'Home', hasSubmenu: false },
    { 
        name: 'Categories', 
        hasSubmenu: true, 
        submenuItems: [
            'Digital Transformation', 
            'Cybersecurity', 
            'High Technology', 
            'Healthcare', 
            'Education', 
            'Automotive', 
            'Manufacturing', 
            'Finance and Fintech', 
            'Retail and E-commerce', 
            'Telecommunications', 
            'Energy and Utilities', 
            'Transportation and Logistics'
        ] 
    },
    { 
        name: 'Journals', 
        hasSubmenu: false
    },
    { 
        name: 'Best in Class', 
        hasSubmenu: false
    },
    { 
        name: 'Blogs', 
        hasSubmenu: false
    },

    { name: 'Contact Us', hasSubmenu: false }
];


  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.openSubmenu = null; // Close any open submenu
  }

  toggleSubMenu(name: string): void {
    this.openSubmenu = this.openSubmenu === name ? null : name;
  }

}
