import { Component } from '@angular/core';



interface Magazine {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  magazines: Magazine[] = [
    {
      id: 1,
      title: 'Global Business Insights',
      description: 'Cutting-edge strategies and market trends',
      image: '../assets/img/1.webp',
      category: 'Business',
      date: 'February 2025'
    },
    {
      id: 2,
      title: 'Tech Revolution Quarterly',
      description: 'Exploring the frontiers of technological innovation',
      image: '../assets/img/2.webp',
      category: 'Technology',
      date: 'January 2025'
    },
    {
      id: 3,
      title: 'Sustainable Living Magazine',
      description: 'Innovative approaches to environmental sustainability',
      image: '../assets/img/3.webp',
      category: 'Lifestyle',
      date: 'March 2025'
    },
    {
      id: 1,
      title: 'Global Business Insights',
      description: 'Cutting-edge strategies and market trends',
      image: '../assets/img/4.webp',
      category: 'Business',
      date: 'February 2025'
    },
    {
      id: 2,
      title: 'Tech Revolution Quarterly',
      description: 'Exploring the frontiers of technological innovation',
      image: '../assets/img/5.webp',
      category: 'Technology',
      date: 'January 2025'
    },
    {
      id: 3,
      title: 'Sustainable Living Magazine',
      description: 'Innovative approaches to environmental sustainability',
      image: '../assets/img/6.webp',
      category: 'Lifestyle',
      date: 'March 2025'
    },
    {
      id: 1,
      title: 'Global Business Insights',
      description: 'Cutting-edge strategies and market trends',
      image: '../assets/img/7.webp',
      category: 'Business',
      date: 'February 2025'
    },
    {
      id: 2,
      title: 'Tech Revolution Quarterly',
      description: 'Exploring the frontiers of technological innovation',
      image: '../assets/img/8.webp',
      category: 'Technology',
      date: 'January 2025'
    },
    {
      id: 3,
      title: 'Sustainable Living Magazine',
      description: 'Innovative approaches to environmental sustainability',
      image: '../assets/img/9.webp',
      category: 'Lifestyle',
      date: 'March 2025'
    }
  ];

  categories = ['All', 'Business', 'Technology', 'Lifestyle'];
  selectedCategory = 'All';

  filterMagazines() {
    if (this.selectedCategory === 'All') {
      return this.magazines;
    }
    return this.magazines.filter(mag => mag.category === this.selectedCategory);
  }
}
