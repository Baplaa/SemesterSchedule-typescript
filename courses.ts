async function course_maker() {
    const response = await fetch('http://localhost:8081/json');
    const data = await response.json();

    interface Course {
        course_number: string;
        course_name: string;
        description: string;
        credits: number;
        pre_requisites: string
    };

    type FillCourse = Array<Course>;

    let course_information: FillCourse = [];

    for(let i=0; i < data.length; i++) {
        let current_course : Course = {
            course_number : data[i]["course_number"],
            course_name : data[i]["course_name"],
            description : data[i]["description"],
            credits : data[i]["credits"],
            pre_requisites : data[i]["pre-reqs"]
        };
        course_information.push(current_course);
    };

    for(let i=0; i < course_information.length; i++) {
        document.querySelector('table').innerHTML += `<tr><td>${course_information[i].course_number}</td><td>${course_information[i].course_name}</td><td>${course_information[i].description}</td><td>${course_information[i].credits}</td><td>${course_information[i].pre_requisites}</td></tr>`
    };
};

course_maker()
