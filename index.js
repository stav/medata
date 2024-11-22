const y2024 = document.querySelector('#y2024')
const y2025 = document.querySelector('#y2025')
const carry = document.querySelector('#carrier')

const table = new DataTable('#example', {
    columns: [
        { title: 'Year'},
        { title: 'Carrier'},
        { title: 'Name'},
        { title: 'Type'},
        { title: 'ID'},
        { title: 'Premium'},
        { title: 'Giveback'},
        { title: 'H Deductible'},
        { title: 'D Deductible (Tiers 1 & 2)'},
        { title: 'PCP copay'},
        { title: 'Spc copay'},
        { title: 'Ambulance'},
        { title: 'ER'},
        { title: 'Urgent'},
        { title: 'MOOP'},
        { title: 'OTC'},
        { title: 'Card'},
        { title: 'Dental'},
        { title: 'Vision'},
        { title: 'Hearing'},
        { title: 'Hospital /day'},
        { title: 'Hospital days'},
        { title: 'Hospital Stays'},
    ],
    data: dataSet,
    order: [],
    select: true,
});

table.search.fixed('year', function (searchStr, data, index) {
    const year = data[0]
    if ( year === 2024 && y2024.checked ) { return true }
    if ( year === 2025 && y2025.checked ) { return true }
    return false
})

table.search.fixed('carrier', function (searchStr, data, index) {
    const carrier = data[1].trim().toLowerCase()
    if ( carry.value == 'ALL' || carry.value == carrier ) { return true }
    return false
})

y2024.addEventListener('input', table.draw )
y2025.addEventListener('input', table.draw )
carry.addEventListener('input', table.draw )
