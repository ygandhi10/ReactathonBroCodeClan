import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const jobs = [
    {
    jobCode: "ABC123",
    title: "Full Stack AL/ML Consaltant",
    details: "Full Stack AL/ML bhah bhah bhah bhah bhahbhah bhah bhah bhah",
    manager: "ABC"
  },
  {
    jobCode: "ABC124",
    title: "Full Stack AL/ML Spec",
    details: "Full Stack AL/ML bhah bhah bhah bhah bhahbhah bhah bhah bhah",
    manager: "ABC"
  },
   {
    jobCode: "ABC125",
    title: "Full Stack AL/ML Analyst",
    details: "Full Stack AL/ML bhah bhah bhah bhah bhahbhah bhah bhah bhah",
    manager: "ABC"
  },
  {
    jobCode: "ABC126",
    title: "Full Stack Angular Analyst",
    details: "Full Stack Angular bhah bhah bhah bhah bhahbhah bhah bhah bhah",
    manager: "ABC"
  },
    {
      jobCode: "ABC127",
      title: "Full Stack Angular Spec",
      details: "Full Stack Angular bhah bhah bhah bhah bhahbhah bhah bhah bhah",
      manager: "ABC"
  },
  {
    jobCode: "ABC128",
    title: "Full Stack Angular Consaltant",
    details: "Full Stack Angular bhah bhah bhah bhah bhahbhah bhah bhah bhah",
    manager: "ABC"
  },
  {
    jobCode: "ABC129",
    title: "Full Stack React Consaltant",
    details: "Full Stack Angular bhah bhah bhah bhah bhahbhah bhah bhah bhah",
    manager: "ABC"
  },
  {
    jobCode: "ABC130",
    title: "Full Stack React Spec",
    details: "Full Stack React bhah bhah bhah bhah bhahbhah bhah bhah bhah",
    manager: "ABC"
  },
  {
    jobCode: "ABC131",
    title: "Full Stack React Analyst",
    details: "Full Stack React bhah bhah bhah bhah bhahbhah bhah bhah bhah",
    manager: "ABC"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (job) => {
  return replaceAll(job.title, ' ', '-');
};

class jobApi {
  static getAlljobs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], jobs));
      }, delay);
    });
  }

  static savejob(job) {
    // clone to avoid mutating reference passed in.
    job = Object.assign({}, job);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minjobTitleLength = 1;
        if (job.title.length < minjobTitleLength) {
          reject(`Title must be at least ${minjobTitleLength} characters.`);
        }

        if (job.id) {
          const existingjobIndex = jobs.findIndex(a => a.jobCode == job.jobCode);
          jobs.splice(existingjobIndex, 1, job);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new jobs in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          job.jobCode = generateId(job);
          jobs.push(job);
        }

        // Just return here, since cloning at the beginning of the function instead.
        resolve(job);
      }, delay);
    });
  }

  static deletejob(jobCode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Bug fix for issue #6 - Now returns since return is implied on arrow funcs without braces.
        const indexOfjobToDelete = jobs.findIndex(job => job.jobCode == jobCode );
        jobs.splice(indexOfjobToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default jobApi;
