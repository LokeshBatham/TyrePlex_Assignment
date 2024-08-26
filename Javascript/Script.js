

const hoverArea = document.getElementById('hoverArea');
const hiddenDiv = document.getElementById('hiddenDiv');

hoverArea.addEventListener('mouseenter', function () {
    hiddenDiv.style.display = 'block';
});

hoverArea.addEventListener('mouseleave', function () {
    setTimeout(function () {
        if (!hiddenDiv.matches(':hover') && !hoverArea.matches(':hover')) {
            hiddenDiv.style.display = 'none';
        }
    }, 100);
});

hiddenDiv.addEventListener('mouseenter', function () {
    hiddenDiv.style.display = 'block';
});

hiddenDiv.addEventListener('mouseleave', function () {
    setTimeout(function () {
        if (!hoverArea.matches(':hover')) {
            hiddenDiv.style.display = 'none';
        }
    }, 100);
});

document.querySelector('.handburgermob').addEventListener('click', function () {
    document.querySelector('.overlay').style.display = 'block';
    document.getElementById("sidenav").style.width = "250px"; // or any desired width
});


// To hide the overlay when clicking outside or pressing a close button, you can add this:
document.querySelector('.overlay').addEventListener('click', function () {

});

document.querySelector('#closebtn').addEventListener('click', function () {
    document.getElementById("sidenav").style.width = "0px"; // Open sidenav
    document.querySelector(".overlay").style.display = 'none'; // Show overlay
});








// Loop through data array and create tyresCard for each item
document.addEventListener('DOMContentLoaded', () => {

    var data = [
        {
            company: "Apollo",
            yearWarrenty: 5,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 5,999",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/apollo-tyres-logo-AC1B9281FA-seeklogo.com.png"
        },
        {
            company: "Apollo",
            yearWarrenty: 4,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 3,136",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/apollo-tyres-logo-AC1B9281FA-seeklogo.com.png"
        },
        {
            company: "Apollo",
            yearWarrenty: 5,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 5,136",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/apollo-tyres-logo-AC1B9281FA-seeklogo.com.png"
        },
        {
            company: "CEAT",
            yearWarrenty: 5,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 6,999",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/CEAT.avif"
        },
        {
            company: "Apollo",
            yearWarrenty: 5,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 5,136",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/apollo-tyres-logo-AC1B9281FA-seeklogo.com.png"
        },
        {
            company: "Apollo",
            yearWarrenty: 5,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 5,136",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/apollo-tyres-logo-AC1B9281FA-seeklogo.com.png"
        },
        {
            company: "Apollo",
            yearWarrenty: 5,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 5,136",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/apollo-tyres-logo-AC1B9281FA-seeklogo.com.png"
        },
        {
            company: "CEAT",
            yearWarrenty: 2,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 3,999",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/CEAT.avif"
        },
        {
            company: "CEAT",
            yearWarrenty: 5,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 7,999",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/CEAT.avif"
        },
        {
            company: "CEAT",
            yearWarrenty: 6,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 6,999",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/CEAT.avif"
        },
        {
            company: "CEAT",
            yearWarrenty: 6,
            tyrename: "AMAZER 4G LIFE",
            v_name: "145/80 R12",
            tyrePrice: "₹ 9,999",
            tubetype: "Tube Type",
            tyreimage: "url('/Images/img_main.webp')",
            cpmpanyLogo: "/Images/CEAT.avif"
        },
    ]

    const rowContainer = document.querySelector("#tyrerow");
    const viewMoreButton = document.querySelector(".modedata");
    const companyFilter = document.querySelector("#companyFilter");
    const sortFilter = document.querySelector("#sortFilter");

    let itemsToShow = 8; // Number of items to show initially
    let currentIndex = 0; // To track the current number of displayed items
    let filteredData = [...data]; // Clone of original data to filter

    function createTyresCard(dataItem) {
        // Create the main container div
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-3", "px-sm-2");

        // Create the tyresCard div
        const tyresCardDiv = document.createElement("div");
        tyresCardDiv.classList.add("tyresCard");
        tyresCardDiv.style.backgroundImage = dataItem.tyreimage;

        // Create the warranty div and span
        const warrantySpan = document.createElement("span");
        warrantySpan.classList.add("warranty");

        const warrantyImg = document.createElement("img");
        warrantyImg.classList.add("warentyimg");
        warrantyImg.src = "/Images/warranty-tag-1x.webp";

        warrantySpan.appendChild(warrantyImg);
        warrantySpan.appendChild(document.createTextNode(`${dataItem.yearWarrenty} Year Warranty`));

        // Create the tyrecartbody div
        const tyreCartBodyDiv = document.createElement("div");
        tyreCartBodyDiv.classList.add("tyrecartbody");

        // Create the tyre company logo image
        const tyreCompanyLogoImg = document.createElement("img");
        tyreCompanyLogoImg.classList.add("tyrecompanylogo");
        tyreCompanyLogoImg.alt = "logo";
        tyreCompanyLogoImg.src = dataItem.cpmpanyLogo;

        // Create the tyre name heading
        const tyreNameHeading = document.createElement("h6");
        tyreNameHeading.classList.add("tyrename");
        tyreNameHeading.textContent = dataItem.tyrename;

        // Create the tyre size heading
        const tyreSizeHeading = document.createElement("h6");
        tyreSizeHeading.classList.add("v-name");
        tyreSizeHeading.textContent = dataItem.v_name;

        // Create the rating div
        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("d-flex", "align-items-center", "common-rating");

        const rtBgDiv = document.createElement("div");
        rtBgDiv.classList.add("rt-bg");

        const starIcon = document.createElement("i");
        starIcon.classList.add("fas", "fa-star");

        const ratingSpan = document.createElement("span");
        ratingSpan.textContent = "4";  // Assuming a rating of 4

        rtBgDiv.appendChild(starIcon);
        rtBgDiv.appendChild(ratingSpan);

        const reviewTextSpan = document.createElement("span");
        reviewTextSpan.classList.add("review-text");
        reviewTextSpan.textContent = "320 Reviews"; // Assuming 320 reviews

        ratingDiv.appendChild(rtBgDiv);
        ratingDiv.appendChild(reviewTextSpan);

        // Create the tyre price heading
        const tyrePriceHeading = document.createElement("h5");
        tyrePriceHeading.classList.add("tyreprice");
        tyrePriceHeading.textContent = dataItem.tyrePrice;

        // Create the offer available paragraph
        const offerAvailableParagraph = document.createElement("p");
        offerAvailableParagraph.classList.add("offeravai");
        offerAvailableParagraph.textContent = "Offer available";

        // Create the tube type paragraph
        const tubeTypeParagraph = document.createElement("p");
        tubeTypeParagraph.classList.add("tubetype", "m-0");
        tubeTypeParagraph.textContent = dataItem.tubetype;

        // Append elements to tyrecartbody div
        tyreCartBodyDiv.appendChild(tyreCompanyLogoImg);
        tyreCartBodyDiv.appendChild(tyreNameHeading);
        tyreCartBodyDiv.appendChild(tyreSizeHeading);
        tyreCartBodyDiv.appendChild(ratingDiv);
        tyreCartBodyDiv.appendChild(tyrePriceHeading);
        tyreCartBodyDiv.appendChild(offerAvailableParagraph);
        tyreCartBodyDiv.appendChild(tubeTypeParagraph);

        // Append warrantySpan to tyresCardDiv
        tyresCardDiv.appendChild(warrantySpan);

        // Append tyrecartbody div to tyresCardDiv
        tyresCardDiv.appendChild(tyreCartBodyDiv);

        // Append tyresCardDiv to containerDiv
        containerDiv.appendChild(tyresCardDiv);

        return containerDiv; // Return the created container element
    }


    // Function to filter the data based on selected filters
    function filterData() {
        const company = companyFilter.value;
        const sort = sortFilter.value;

        filteredData = data.filter(item => {
            return (company === "" || item.company === company);
        });

        if (sort === "hightolow") {
            filteredData.sort((a, b) => parseFloat(b.tyrePrice.replace('₹', '').replace(',', '')) - parseFloat(a.tyrePrice.replace('₹', '').replace(',', '')));
        } else if (sort === "lowtohigh") {
            filteredData.sort((a, b) => parseFloat(a.tyrePrice.replace('₹', '').replace(',', '')) - parseFloat(b.tyrePrice.replace('₹', '').replace(',', '')));
        }

        currentIndex = 0;
        rowContainer.innerHTML = ""; // Clear the current list
        loadMoreItems();
    }

    // Function to load and display the next set of items
    function loadMoreItems() {
        const nextItems = filteredData.slice(currentIndex, currentIndex + itemsToShow);
        nextItems.forEach(item => {
            const tyresCardElement = createTyresCard(item);
            rowContainer.appendChild(tyresCardElement);
        });
        currentIndex += itemsToShow;

        // Hide the button if all items are loaded
        if (currentIndex >= filteredData.length) {
            viewMoreButton.style.display = 'none';
        } else {
            viewMoreButton.style.display = 'block';
        }
    }

    // Load the initial set of items
    loadMoreItems();

    // Add event listeners to the filters
    companyFilter.addEventListener('change', filterData);
    sortFilter.addEventListener('change', filterData);

    // Add event listener to the "View More" button
    viewMoreButton.addEventListener('click', loadMoreItems);
});


// Advance Switch 

document.addEventListener('DOMContentLoaded', function () {
    const switchElement = document.getElementById('flexSwitchCheckDefault');
    const contentDiv = document.getElementById('contentDiv');

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            contentDiv.style.display = 'flex'; // Hide the div
        } else {
            contentDiv.style.display = 'none'; // Show the div
        }
    });
});

