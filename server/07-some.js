const numbers = [1, 2, 3, 4, 5];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}

//vs

console.log('rta', rta);

const rta2 = numbers.some(item => item % 2 === 0);
console.log('rta2', rta2);

const orders = [
    {
        customerName: 'Igor',
        total: 100,
        delivered: false,
    },
    {
        customerName: 'Vladimir',
        total: 200,
        delivered: true,
    },
    {
        customerName: 'Sergei',
        total: 300,
        delivered: false,
    },
    {
        customerName: 'Anastasia',
        total: 400,
        delivered: true,
    },
    {
        customerName: 'Lucia',
        total: 500,
        delivered: false,
    },
    {
        customerName: 'Ignacio',
        total: 600,
        delivered: true,
    }
];

const rta3 = orders.some(item => item.delivered);
console.log('rta3', rta3);


//Appointments

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate },
        );
    })
};

console.log('isOverlap',isOverlap(newAppointment));