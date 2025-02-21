import { Component } from '@angular/core';




interface MenuItem {
  name: string;
  hasSubmenu: boolean;
  submenuItems?: string[];
}

type CategoryType = 'lifestyle' | 'fashion';

interface BlogPost {
  title: string;
  date: string;
  author: string;
  comments: number;
  category: CategoryType;
  imageUrl: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';




  // navbar

  isSearchOpen = false;
  isMobileMenuOpen = false;

  menuItems: MenuItem[] = [
    { name: 'Home', hasSubmenu: true, submenuItems: ['Home 1', 'Home 2', 'Home 3'] },
    { name: 'Pages', hasSubmenu: true, submenuItems: ['About', 'Contact', 'Services'] },
    { name: 'Fashion', hasSubmenu: true, submenuItems: ['Trends', 'Collections', 'Shows'] },
    { name: 'Lifestyle', hasSubmenu: true, submenuItems: ['Health', 'Travel', 'Food'] },
    { name: 'Business', hasSubmenu: true, submenuItems: ['Strategy', 'Finance', 'Marketing'] },
    { name: 'Photography', hasSubmenu: true, submenuItems: ['Portfolio', 'Gallery', 'Tutorials'] },
    { name: 'Layout', hasSubmenu: true, submenuItems: ['Grid', 'List', 'Masonry'] },
    { name: 'Shortcodes', hasSubmenu: true, submenuItems: ['Buttons', 'Forms', 'Cards'] }
  ];

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  posts: BlogPost[] = [
    {
      title: 'Adipiscing Fermentum Risus Nibh Tellus',
      date: '24 Jan 2015',
      author: 'John Doe',
      comments: 0,
      category: 'lifestyle',
      imageUrl: 'https://images.unsplash.com/photo-1739961097716-064cb40a941e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Mollis Ullamcorper Elit Sem',
      date: '24 Jan 2015',
      author: 'John Doe',
      comments: 0,
      category: 'lifestyle',
      imageUrl: 'https://images.unsplash.com/photo-1739932215472-15ebf0ab6cf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Cras Malesuada Justo Sit Consectetur',
      date: '22 Jan 2015',
      author: 'John Doe',
      comments: 0,
      category: 'lifestyle',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1738907349895-62b86fda1f42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Malesuada Nullam Ipsum Bibendum Ultricies',
      date: '22 Jan 2015',
      author: 'John Doe',
      comments: 0,
      category: 'fashion',
      imageUrl: 'https://images.unsplash.com/photo-1735348061620-81cf27a5b6ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Condimentum Sollicitudin Commodo Ornare',
      date: '22 Jan 2015',
      author: 'John Doe',
      comments: 1,
      category: 'fashion',
      imageUrl: 'https://images.unsplash.com/photo-1739946544837-266f0d1d1590?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Euismod Porta Cras',
      date: '22 Jan 2015',
      author: 'John Doe',
      comments: 0,
      category: 'fashion',
      imageUrl: 'https://images.unsplash.com/photo-1739959272086-afc87e72776b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  trendingPosts: BlogPost[] = [
    {
      title: 'Fringilla Aenean Ornare Ligula',
      date: '24 Jan 2015',
      author: 'John Doe',
      comments: 3,
      category: 'lifestyle',
      imageUrl: 'https://images.unsplash.com/photo-1739932215669-c310f1c57f1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Nnx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Condimentum Sollicitudin Commodo Ornare',
      date: '22 Jan 2015',
      author: 'John Doe',
      comments: 1,
      category: 'fashion',
      imageUrl: 'https://images.unsplash.com/photo-1739005375704-fa5e6c68fc84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Link Post Format',
      date: '09 Jan 2014',
      author: 'John Doe',
      comments: 0,
      category: 'fashion',
      imageUrl: 'https://images.unsplash.com/photo-1739219959019-dd317f76c7e8?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Slider – Image Post Format',
      date: '09 Jan 2014',
      author: 'John Doe',
      comments: 0,
      category: 'lifestyle',
      imageUrl: 'https://images.unsplash.com/photo-1739733901481-2c0074e33ede?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  getPostsByCategory(category: CategoryType): BlogPost[] {
    return this.posts.filter(post => post.category === category);
  }


  photographyPosts = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1738746819119-9f633966f43b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
      title: 'Adipiscing Cras Tellus Euismod Ornare',
      date: '24 Jan 2015',
      author: 'John Doe',
      comments: 0,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1703602028618-254e40bbe790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
      title: 'Fermentum Fringilla Etiam Mattis',
      date: '22 Jan 2015',
      author: 'John Doe',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1646736722277-8e035a16e056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
      title: 'Purus Dapibus Commodo Nibh',
      date: '22 Jan 2015',
      author: 'John Doe',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1737108879273-12d4927a376a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
      title: 'Ridiculus Euismod Tortor',
      date: '22 Jan 2015',
      author: 'John Doe',
    }
  ];



  currentIndex = 0;
  slideWidth = 50; // 100% divided by 4 slides for desktop

  slides = [
    {
      img: 'https://images.unsplash.com/photo-1491720731493-223f97d92c21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D',
      text: 'Sit Porta Vulputate Ultricies Quam1'
    },
    {
      img: 'https://images.unsplash.com/photo-1484452330304-377cdeb05340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D',
      text: 'Tellus Risus Lorem Ligula2'
    },
    {
      img: 'https://images.unsplash.com/photo-1562776930-f2a2492c9c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D',
      text: 'Aenean Justo Fringilla Parturient3'
    },
    {
      img: 'https://images.unsplash.com/photo-1578747763484-51b21a33e4fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D',
      text: 'Ipsum Malesuada Egestas Amet4'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1736600242150-4ea1d5cb3a64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D',
      text: 'Sit Porta Vulputate Ultricies Quam5'
    },
    {
      img: 'https://images.unsplash.com/photo-1617972882594-b1b094574749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D',
      text: 'Tellus Risus Lorem Ligula6'
    }
  ];

  constructor() {
    // Update slide width based on screen size
    this.updateSlideWidth();
    window.addEventListener('resize', () => this.updateSlideWidth());
  }

  ngOnInit(): void {}

  updateSlideWidth(): void {
    if (window.innerWidth < 640) {
      this.slideWidth = 100; // 1 slide on mobile
    } else if (window.innerWidth < 1024) {
      this.slideWidth = 50; // 2 slides on tablet
    } else {
      this.slideWidth = 30; // 4 slides on desktop
    }
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;  // Loop back to first slide
    }
  }
  
  previousSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;  // Loop back to last slide
    }
  }
  

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.updateSlideWidth());
  }
  
}
