import React from 'react'
import Card from './components/card'
import User from './components/user'

const App = () => {

  const jobs = [
  {
    id: 1,
    // logo: "https://logo.clearbit.com/amazon.com",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    title: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    posted: "5 days ago"
  },
  {
    id: 2,
    // logo: "https://logo.clearbit.com/google.com",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
    company: "Google",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Bengaluru, India",
    posted: "2 days ago"
  },
  {
    id: 3,
    // logo: "https://logo.clearbit.com/microsoft.com",
    logo: "https://1000logos.net/wp-content/uploads/2017/04/Microsoft-logo.png",
    company: "Microsoft",
    title: "Software Engineer",
    type: "Full Time",
    level: "Entry Level",
    salary: "$85/hr",
    location: "Hyderabad, India",
    posted: "1 week ago"
  },
  {
    id: 4,
    // 
     logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-logo.png",
    company: "Apple",
    title: "iOS Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Pune, India",
    posted: "3 days ago"
  },
  {
    id: 5,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-logo.png",
    company: "Netflix",
    title: "Backend Engineer",
    type: "Remote",
    level: "Senior Level",
    salary: "$150/hr",
    location: "Remote",
    posted: "6 days ago"
  },
  {
    id: 6,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-logo.png",
    company: "Adobe",
    title: "Product Designer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Noida, India",
    posted: "4 days ago"
  },
  {
    id: 7,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-logo.png",
    company: "Meta",
    title: "React Developer",
    type: "Remote",
    level: "Senior Level",
    salary: "$135/hr",
    location: "Remote",
    posted: "Today"
  },
  {
    id: 8,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-logo.png",
    company: "IBM",
    title: "Cloud Engineer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$90/hr",
    location: "Chennai, India",
    posted: "2 weeks ago"
  },
  {
    id: 9,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-logo.png",
    company: "Intel",
    title: "AI Engineer",
    type: "Internship",
    level: "Entry Level",
    salary: "$45/hr",
    location: "Bengaluru, India",
    posted: "3 days ago"
  },
  {
    id: 10,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-logo.png",
    company: "Oracle",
    title: "Database Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$115/hr",
    location: "Hyderabad, India",
    posted: "1 day ago"
  },
  {
    id: 11,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-logo.png",
    company: "Salesforce",
    title: "CRM Developer",
    type: "Remote",
    level: "Mid Level",
    salary: "$105/hr",
    location: "Remote",
    posted: "5 days ago"
  },
  {
    id: 12,
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Spotify",
    title: "UI Designer",
    type: "Contract",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Delhi, India",
    posted: "1 week ago"
  }
];



// export default jobs;
  return (
    <div className="parent">
         {jobs.map(function(elem, idx){
    
          return <div key={idx}>
            <Card logo={elem.logo} company={elem.company} title={elem.title} type={elem.type} level={elem.level} salary={elem.salary} location={elem.location} posted={elem.posted} /> 
          </div>
         })}
    </div>
  )
}

export default App
