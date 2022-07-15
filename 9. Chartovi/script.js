const radarEl = document.getElementById('radar');
const radar = new Chart(radarEl, {
    type: 'radar',
    data: {
        labels: ['Trud (Theme/Custom)', 'Funkcionalnost', 'Responsive', 'Dizajn (UX/UI)', 'Source Code', 'Skill'],
        datasets: [
         {
            label: 'Worldtime',
            data: [7, 9, 9, 8, 9, 8],
            backgroundColor: [
                'rgba(0, 0, 255, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: 'Amplituda',
            data: [8, 6, 10, 9, 10, 9],
            backgroundColor: [
               'rgba(0, 168, 90, 0.2)',
            ],
            borderColor: [
               'rgba(0, 168, 90, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: 'Sanovnik',
            data: [6, 6, 9, 7, 5, 3],
            backgroundColor: [
               'rgba(181, 181, 181, 0.2)',
            ],
            borderColor: [
               'rgba(181, 181, 181, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "Raian's Shoes",
            data: [10, 8, 7, 8, 9, 8],
            backgroundColor: [
               'rgba(162, 33, 33, 0.2)',
            ],
            borderColor: [
               'rgba(162, 33, 33, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "Oblivion",
            data: [9, 7, 4, 6, 8, 8],
            backgroundColor: [
               'rgba(51, 51, 51, 0.2)',
            ],
            borderColor: [
               'rgba(51, 51, 51, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "sosuilinden/mossau",
            data: [9, 6, 10, 9, 8, 8],
            backgroundColor: [
               'rgba(108, 6, 116, 0.2)',
            ],
            borderColor: [
               'rgba(108, 6, 116, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "RestaurantForYou",
            data: [10, 9, 8, 7, 8, 9],
            backgroundColor: [
               'rgba(232, 175, 41, 0.2)',
            ],
            borderColor: [
               'rgba(232, 175, 41, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "Anel Islamovic",
            data: [8, 7, 9, 7, 7, 8],
            backgroundColor: [
               'rgba(67, 56, 202, 0.2)',
            ],
            borderColor: [
               'rgba(67, 56, 202, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "Chicked and burger bar",
            data: [10, 6, 10, 7, 9, 8],
            backgroundColor: [
               'rgba(255, 255, 0, 0.2)',
            ],
            borderColor: [
               'rgba(255, 255, 0, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "Kristijanp",
            data: [8, 6, 3, 9, 7, 7],
            backgroundColor: [
               'rgba(10, 40, 56, 0.2)',
            ],
            borderColor: [
               'rgba(10, 40, 56, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "PetTaxi",
            data: [8, 7, 10, 7, 7, 7],
            backgroundColor: [
               'rgba(1, 185, 94, 0.2)',
            ],
            borderColor: [
               'rgba(1, 185, 94, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "Rechko",
            data: [9, 9, 8, 6, 8, 9],
            backgroundColor: [
               'rgba(34, 34, 34, 0.2)',
            ],
            borderColor: [
               'rgba(34, 34, 34, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "Adam Vegvari",
            data: [10, 7, 10, 7, 8, 8],
            backgroundColor: [
               'rgba(3, 177, 252, 0.2)',
            ],
            borderColor: [
               'rgba(3, 177, 252, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "Garden Paradise",
            data: [7, 7, 9, 6, 5, 6],
            backgroundColor: [
               'rgba(221, 119, 119, 0.2)',
            ],
            borderColor: [
               'rgba(221, 119, 119, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "ZN Electronics",
            data: [8, 7, 9, 7, 7, 8],
            backgroundColor: [
               'rgba(135, 206, 250, 0.2)',
            ],
            borderColor: [
               'rgba(135, 206, 250, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: 'OFK "BEGEJ"',
            data: [9, 7, 9, 6, 7, 9],
            backgroundColor: [
               'rgba(255, 0, 0, 0.2)',
            ],
            borderColor: [
               'rgba(255, 0, 0, 1)',
            ],
            borderWidth: 1.5
        },
        {
            label: "Elite Home",
            data: [9, 7, 10, 8, 9, 8],
            backgroundColor: ['rgba(32, 113, 120, 0.2)',],
            borderColor: [
               'rgba(32, 113, 120, 1)'
            ],
            borderWidth: 1.5
        },
        {
            label: "Novakovic",
            data: [10, 8, 10, 9, 8, 10],
            backgroundColor: [
               'rgba(165, 42, 42, 0.2)',
            ],
            borderColor: [
               'rgba(165, 42, 42, 1)',
            ],
            borderWidth: 1.5
        },
      ]
    },
    options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true
          }
      },
    }
});
