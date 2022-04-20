const get = (request, response) => {
   
    const technologydata= [
        {
            id:"1",
            category: "Technology",
            name: "Artificial intelligence",
            img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            about: "Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.Less than a decade after breaking the Nazi encryption machine Enigma and helping the Allied Forces win World War II, mathematician Alan Turing changed history a second time with a simple question.At its core, AI is the branch of computer science that aims to answer Turing's question in the affirmative. It is the endeavor to replicate or simulate human intelligence in machines."
        },
        {
            id:"2",
            category: "Technology",
            name: "Blockchain",
            img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            about: "Blockchain technology is most simply defined as a decentralized, distributed ledger that records the provenance of a digital asset. By inherent design, the data on a blockchain is unable to be modified, which makes it a legitimate disruptor for industries like payments, cybersecurity and healthcare. Our guide will walk you through what it is, how it's used and its history.Blockchain, sometimes referred to as Distributed Ledger Technology (DLT), makes the history of any digital asset unalterable and transparent through the use of decentralization and cryptographic hashing.  "
        },
        {
            id:"3",
            category: "Technology",
            name: "CyberSecurity",
            img: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            about: "Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.Security system complexity, created by disparate technologies and a lack of in-house expertise, can amplify these costs. But organizations with a comprehensive cybersecurity strategy, governed by best practices and automated using advanced analytics, artificial intelligence (AI) and machine learning."
        },
        {
            id:"4",
            category: "Technology",
            name: "Data Science",
            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            about: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains.Data scientists examine which questions need answering and where to find the related data.Data science refers to the process of extracting clean information to formulate actionable insights"
        },
    ]
  
    response.send(technologydata);
}

module.exports.gettechnologyDetails = get