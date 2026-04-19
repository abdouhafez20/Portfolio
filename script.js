// script.js

// Mobile menu toggle 
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Theme switching 
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// Form submission 
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!');
});

// Skill bar animations 
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.style.width = skill.getAttribute('data-level');
    });
});

// Project filtering 
document.querySelector('.filter-buttons').addEventListener('click', (e) => {
    const filterValue = e.target.getAttribute('data-filter');
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (filterValue === 'all' || project.classList.contains(filterValue)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});

// Scroll effects 
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});