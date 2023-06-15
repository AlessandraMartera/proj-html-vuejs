import { reactive } from 'vue'


export const store = reactive({
    header: {
        logo: 'dark-logo.png',
        links: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
    },
    footer: {
        address: '382 NE 19!st St# 8739 Miami, Fl 33279-3899',
        tel: '+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)',
        email: 'support@maxcoach.com',
        instagram: {
            name: '@maxcoach',
            immages: ['footer/120084500_197897808368764_8114555493043279565_n.jpg', 'footer/120012142_177596140500760_8623485824101406058_n.jpg', 'footer/120099363_364334431619755_7198812647386067017_n.jpg'],
        }
    },
    Courses: [
        {
            img: 'courses/artist-course-08-480x480.jpg',
            name: 'The acrylic Painting Academy',
            price: '18.00',
            numberLessons: 4,
            numeberStudent: 50,
        },
        {
            img: 'courses/artist-course-07-480x480.jpg',
            name: 'Drawing and Shading Complete Course',
            price: '21.00',
            numberLessons: 14,
            numeberStudent: 50,
        },
        {
            img: 'courses/artist-course-06-480x480.jpg',
            name: 'The Color Theory for Difital Artist',
            price: '19.00',
            numberLessons: 7,
            numeberStudent: 50,
        },
        {
            img: 'courses/artist-course-05-480x480.jpg',
            name: 'Ultimate Guide to Digital Sketching for Beginner',
            price: '35.00',
            numberLessons: 14,
            numeberStudent: 50,
        },
        {
            img: 'courses/artist-course-04-480x480.jpg',
            name: 'Portrait Drawing The Smart Way',
            price: '19.00',
            numberLessons: 2,
            numeberStudent: 50,
        },
        {
            img: 'courses/artist-course-03-480x480.jpg',
            name: 'Mastering Watercoler Painting from Beginner',
            price: '19.00',
            numberLessons: 9,
            numeberStudent: 50,
        },
        {
            img: 'courses/artist-course-02-480x480.jpg',
            name: 'The Art & Science of Drawing',
            price: '25.00',
            numberLessons: 4,
            numeberStudent: 50,
        },
        {
            img: 'courses/artist-course-01-480x480.jpg',
            name: 'The Colored Pencil Drawing Course',
            price: '22.00',
            numberLessons: 6,
            numeberStudent: 50,
        }
    ],
    testimonialsActiveCard: 1,
    testimonials: [

        {
            userInfo: {
                immage: 'testimonials/artist-testimonial-avatar-02.jpg',
                name: 'Florence Themes',
                job: 'Multimedia Admin'
            },
            title: "it's a choice of quality for people with special needs",
            text: "i'am a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MacCoach guys just got me.",
        },
        {
            userInfo: {
                immage: 'testimonials/artist-testimonial-avatar-04.jpg',
                name: 'Mina Hollace',
                job: 'Freelancer'
            },
            title: 'High level of efficiency and scientific teaching methods',
            text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for peaple like me.',
        },
        {
            userInfo: {
                immage: 'testimonials/artist-testimonial-avatar-01.jpg',
                name: 'Madley Pondor',
                job: 'IT Specialist'
            },
            title: "Professional team of specialists and passionate mentors at reach",
            text: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when deadling with students.",
        },
    ],
    events: [
        {
            immage: 'events/artist-event-04-250x300.jpg',
            date: 'NOV 22, 2020',
            title: 'Storytelling Workshop',
            where: 'Texas, US'
        },
        {
            immage: 'events/artist-event-03-250x300.jpg',
            date: 'OCT 10, 2020',
            title: 'Painting Art Contest 2020',
            where: 'New york, US'
        },
        {
            immage: 'events/artist-event-01-250x300.jpg',
            date: 'DEC 15, 2020',
            title: 'Street Performance: CAll For Artist',
            where: 'Illinois, US'
        },
        {
            immage: 'events/artist-event-02-250x300.jpg',
            date: 'Nov 23, 2020',
            title: 'Internationel Art Fair 2020',
            where: 'Hamburg, Germany'
        }
    ]
});