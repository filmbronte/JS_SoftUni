function ticketManager(arr, str) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const tickets = [];

    for (let el of arr) {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        const ticket = new Ticket(destination, price, status);

        tickets.push(ticket);
    }

    tickets.sort((a, b) => {
        if (typeof a[str] === 'number') {
            return a[str] - b[str];
        } else {
            return a[str].localeCompare(b[str]);
        }
    });

    return tickets;
}




const result = ticketManager(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');

console.log(result);