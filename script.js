function handleMenuClose(event, targetId) {
  const menuList = document.getElementById('menuList');
  menuList.style.display = 'none';

  if (event) {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    const offset = 600;
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

document.getElementById('menuButton').addEventListener('click', function () {
  const menuList = document.getElementById('menuList');
  if (menuList.style.display === 'none' || menuList.style.display === '') {
    menuList.style.display = 'block';
  } else {
    menuList.style.display = 'none';
  }
});

// Optional: Click outside to close the menu
window.addEventListener('click', function (event) {
  const menuList = document.getElementById('menuList');
  const menuButton = document.getElementById('menuButton');
  if (event.target !== menuButton && !menuButton.contains(event.target) && event.target !== menuList && !menuList.contains(event.target)) {
    menuList.style.display = 'none';
  }
});

const companies = [
  { company_name: 'Apple', ticker: 'AAPL', vertical: 'Technology', price: 150, market_cap: '2.4T', revenue_growth: '12%', gross_margin: '38%', ev_revenue: '7x', ytd_performance: '15%' },
  { company_name: 'Microsoft', ticker: 'MSFT', vertical: 'Technology', price: 290, market_cap: '2.1T', revenue_growth: '10%', gross_margin: '36%', ev_revenue: '8x', ytd_performance: '20%' },
  { company_name: 'Amazon', ticker: 'AMZN', vertical: 'E-commerce', price: 3300, market_cap: '1.7T', revenue_growth: '22%', gross_margin: '26%', ev_revenue: '4x', ytd_performance: '10%' },
  { company_name: 'Google', ticker: 'GOOGL', vertical: 'Technology', price: 2800, market_cap: '1.8T', revenue_growth: '15%', gross_margin: '55%', ev_revenue: '6x', ytd_performance: '25%' },
  { company_name: 'Facebook', ticker: 'FB', vertical: 'Social Media', price: 350, market_cap: '1T', revenue_growth: '30%', gross_margin: '80%', ev_revenue: '10x', ytd_performance: '18%' },
  { company_name: 'Tesla', ticker: 'TSLA', vertical: 'Automotive', price: 700, market_cap: '800B', revenue_growth: '50%', gross_margin: '20%', ev_revenue: '12x', ytd_performance: '35%' },
  { company_name: 'NVIDIA', ticker: 'NVDA', vertical: 'Semiconductors', price: 200, market_cap: '600B', revenue_growth: '24%', gross_margin: '60%', ev_revenue: '10x', ytd_performance: '40%' },
  { company_name: 'Netflix', ticker: 'NFLX', vertical: 'Entertainment', price: 550, market_cap: '250B', revenue_growth: '25%', gross_margin: '40%', ev_revenue: '7x', ytd_performance: '30%' },
  { company_name: 'Adobe', ticker: 'ADBE', vertical: 'Software', price: 650, market_cap: '300B', revenue_growth: '20%', gross_margin: '85%', ev_revenue: '10x', ytd_performance: '22%' },
  { company_name: 'Intel', ticker: 'INTC', vertical: 'Semiconductors', price: 60, market_cap: '250B', revenue_growth: '8%', gross_margin: '55%', ev_revenue: '3x', ytd_performance: '5%' },
  { company_name: 'Salesforce', ticker: 'CRM', vertical: 'Software', price: 250, market_cap: '220B', revenue_growth: '24%', gross_margin: '75%', ev_revenue: '9x', ytd_performance: '28%' },
  { company_name: 'Zoom', ticker: 'ZM', vertical: 'Technology', price: 350, market_cap: '100B', revenue_growth: '40%', gross_margin: '70%', ev_revenue: '15x', ytd_performance: '10%' },
  { company_name: 'Shopify', ticker: 'SHOP', vertical: 'E-commerce', price: 1300, market_cap: '180B', revenue_growth: '30%', gross_margin: '60%', ev_revenue: '20x', ytd_performance: '35%' },
  { company_name: 'Spotify', ticker: 'SPOT', vertical: 'Entertainment', price: 250, market_cap: '50B', revenue_growth: '18%', gross_margin: '25%', ev_revenue: '5x', ytd_performance: '12%' },
  { company_name: 'Square', ticker: 'SQ', vertical: 'Financial', price: 250, market_cap: '110B', revenue_growth: '40%', gross_margin: '40%', ev_revenue: '10x', ytd_performance: '30%' },
  { company_name: 'PayPal', ticker: 'PYPL', vertical: 'Financial', price: 300, market_cap: '350B', revenue_growth: '20%', gross_margin: '50%', ev_revenue: '12x', ytd_performance: '18%' },
  { company_name: 'Uber', ticker: 'UBER', vertical: 'Transportation', price: 50, market_cap: '90B', revenue_growth: '35%', gross_margin: '10%', ev_revenue: '6x', ytd_performance: '25%' },
  { company_name: 'Lyft', ticker: 'LYFT', vertical: 'Transportation', price: 60, market_cap: '20B', revenue_growth: '30%', gross_margin: '15%', ev_revenue: '5x', ytd_performance: '22%' },
  { company_name: 'Twitter', ticker: 'TWTR', vertical: 'Social Media', price: 70, market_cap: '50B', revenue_growth: '20%', gross_margin: '40%', ev_revenue: '8x', ytd_performance: '14%' },
  { company_name: 'Snapchat', ticker: 'SNAP', vertical: 'Social Media', price: 80, market_cap: '100B', revenue_growth: '25%', gross_margin: '45%', ev_revenue: '9x', ytd_performance: '20%' },
  { company_name: 'Alibaba', ticker: 'BABA', vertical: 'E-commerce', price: 220, market_cap: '600B', revenue_growth: '25%', gross_margin: '55%', ev_revenue: '8x', ytd_performance: '12%' },
  { company_name: 'Baidu', ticker: 'BIDU', vertical: 'Technology', price: 200, market_cap: '80B', revenue_growth: '15%', gross_margin: '50%', ev_revenue: '7x', ytd_performance: '10%' },
  { company_name: 'Tencent', ticker: 'TCEHY', vertical: 'Technology', price: 70, market_cap: '700B', revenue_growth: '25%', gross_margin: '60%', ev_revenue: '8x', ytd_performance: '18%' },
  { company_name: 'JD.com', ticker: 'JD', vertical: 'E-commerce', price: 80, market_cap: '150B', revenue_growth: '30%', gross_margin: '20%', ev_revenue: '5x', ytd_performance: '22%' },
  { company_name: 'Meituan', ticker: 'MPNGY', vertical: 'Technology', price: 50, market_cap: '200B', revenue_growth: '35%', gross_margin: '30%', ev_revenue: '6x', ytd_performance: '25%' },
];


const companyDataContainer = document.getElementById('company-data');
const searchInput = document.getElementById('searchCompany');

const displayCompanies = (filteredCompanies) => {
  companyDataContainer.innerHTML = '';
  filteredCompanies.forEach((company, index) => {
    const row = document.createElement('tr');
    row.className = index % 2 === 0 ? 'bg-[#F3F3F3]' : '';
    row.innerHTML = `
                    <td class="px-4 py-2">${company.company_name}</td>
                    <td class="px-4 py-2">${company.ticker}</td>
                    <td class="px-4 py-2">${company.vertical}</td>
                    <td class="px-4 py-2">$${company.price}</td>
                    <td class="text-center">$${company.market_cap}</td>
                    <td class="text-center py-2">${company.revenue_growth}</td>
                    <td class="text-center py-2">${company.gross_margin}</td>
                    <td class="text-center py-2">${company.ev_revenue}</td>
                    <td class="text-center py-2">${company.ytd_performance}</td>
                `;
    companyDataContainer.appendChild(row);
  });
};

// Display all companies initially
displayCompanies(companies);

searchInput.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase();
  if (searchValue) {
    const filteredCompanies = companies.filter(company =>
      company.company_name.toLowerCase().includes(searchValue)
    );
    displayCompanies(filteredCompanies);
  }
  else displayCompanies(companies);
});

document.getElementById('downloadPdf').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.text('Company Data', 14, 22);

  // Table Headers
  doc.setFontSize(12);
  const headers = ["Company Name", "Ticker", "Vertical", "Price", "Market Cap", "Revenue Growth", "Gross Margin", "EV/Revenue", "YTD Performance"];
  const tableData = [];

  // Data Rows
  companies.forEach(company => {
    tableData.push([
      company.company_name,
      company.ticker,
      company.vertical,
      `$${company.price}`,
      `$${company.market_cap}`,
      company.revenue_growth,
      company.gross_margin,
      company.ev_revenue,
      company.ytd_performance
    ]);
  });

  doc.autoTable({
    head: [headers],
    body: tableData,
    startY: 30,
    styles: { fontSize: 10 },
  });

  doc.save('company_data.pdf');
});

// carousel
const images = ['./images/state.png', './images/state2.png', './images/state3.png',];
let currentIndex = 0;

function updateCarousel() {
  const carousel = document.getElementById('carousel');
  const nextIndex = (currentIndex + 1) % images.length;
  const partialIndex = (currentIndex + 2) % images.length;

  carousel.innerHTML = `
        <img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}" class="carousel-image">
        <img src="${images[nextIndex]}" alt="Image ${nextIndex + 1}" class="carousel-image">
        <div class="partial">
          <img src="${images[partialIndex]}" alt="Image ${partialIndex + 1}" class="carousel-image">
        </div>
      `;
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

// Initial load
updateCarousel();



// navbar color change
function isFixedDivOutOfSpecificDiv() {
  const fixedDiv = document.getElementById('fixed-div');
  const specificDiv = document.getElementById('hero-div');

  const fixedDivRect = fixedDiv.getBoundingClientRect();
  const specificDivRect = specificDiv.getBoundingClientRect();

  const isOutside =
    fixedDivRect.bottom < specificDivRect.top ||
    fixedDivRect.top > specificDivRect.bottom ||
    fixedDivRect.right < specificDivRect.left ||
    fixedDivRect.left > specificDivRect.right;

  return isOutside;
}

document.addEventListener('scroll', () => {
  const result = isFixedDivOutOfSpecificDiv();
  console.log('Is fixed div out of specific div?', result);

  const fixedDiv = document.getElementById('fixed-div');
  const navDownload = document.getElementById('navDownload');
  const shareButton = document.getElementById("shareButton");
  const menuButton = document.getElementById("menuButton")
  // const specificDiv = document.getElementById('hero-div');

  if (result) {
    fixedDiv.classList.add("navbarWithoutHero");
    fixedDiv.classList.remove("navbarWithHero");
    navDownload.classList.add('navbarDownButtonWithoutHero')
    navDownload.classList.remove('navbarDownButtonWithHero')
    shareButton.classList.remove("navbarShareWithHero");
    shareButton.classList.add("navbarShareWithoutHero");
    menuButton.classList.remove("navbarMenuWithHero");
    menuButton.classList.add("navbarMenuWithoutHero");

  }
  else {
    fixedDiv.classList.add("navbarWithHero");
    fixedDiv.classList.remove("navbarWithoutHero");
    navDownload.classList.remove('navbarDownButtonWithoutHero')
    navDownload.classList.add('navbarDownButtonWithHero')
    shareButton.classList.remove("navbarShareWithoutHero");
    shareButton.classList.add("navbarShareWithHero");
    menuButton.classList.remove("navbarMenuWithoutHero");
    menuButton.classList.add("navbarMenuWithHero");
  }
});


function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}