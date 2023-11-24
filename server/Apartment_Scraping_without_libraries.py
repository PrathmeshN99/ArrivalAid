import socket
import re
import time
import random

# Initialize lists to store extracted data
property_titles = []
locations = []
rent_prices = []
deposit_prices = []
builtup_areas = []
image_urls = []
property_types = []
furnishing_statuses = []
preferred_tenants = []
availabilities = []

# Progress bar for displaying % completion
total_pages = 20
for page in range(total_pages):
    print(f"Scraping page {page + 1}/{total_pages}")

    # Construct the URL for the current page
    link = f"https://www.nobroker.in/property/rent/pune/Bibwewadi?searchParam=W3sibGF0IjoxOC40NjkwMjEzLCJsb24iOjczLjg2NDA5NDQsInBsYWNlSWQiOiJDaElKalhhRlFKZnF3anNSZHVLa2IzMF9mUlkiLCJwbGFjZU5hbWUiOiJCaWJ3ZXdhZGkifV0=&radius=2.0&sharedAccomodation=0&city=pune&locality=Bibwewadi{page + 1}"

    try:
        # Create a socket and establish a connection to the web server
        ip_address = socket.gethostbyname("www.nobroker.in")
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        client_socket.connect((ip_address, 80))

        # Send an HTTP GET request
        request = f"GET {link} HTTP/1.1\r\nHost: www.nobroker.in\r\n\r\n"
        client_socket.send(request.encode())

        # Receive and store the server's response
        response = ""
        while True:
            data = client_socket.recv(4096)
            if not data:
                break
            response += data.decode()

        client_socket.close()

        # Extract property information using regular expressions
        house_containers = re.findall(r'<article.*?</article>', response, re.DOTALL)
        if not house_containers:
            break

        for element in house_containers:
            title_text = re.search(r'<h2 class="heading-6">(.*?)</h2>', element).group(1).strip()
            location_text = re.search(r'<div class="text-gray-light">(.*?)</div>', element).group(1).strip()
            rent_price_text = re.search(r'<div class="font-semi-bold heading-6">(.*?)</div>', element).group(1).strip().replace('\n', '').replace('â¹', '₹')
            deposit_price_text = re.search(r'<div class="font-semi-bold heading-6" id="roomType">(.*?)</div>', element).group(1).strip().replace('\n', '').replace('â¹', '₹')
            builtup_area_text = re.search(r'<div class="heading-7">(.*?)</div>', element).group(1).strip().replace('\n', '')
            image_url = re.search(r'<img alt="{title_text}" src="(.*?)"', element).group(1)
            property_type_text = re.search(r'<div class="flex-1 border-r border-r-solid border-r-cardbordercolor">(.*?)</div>', element).group(1).strip()
            furnishing_text = re.search(r'<div class="flex">.*?Furnishing.*?<div>(.*?)</div>', element).group(1).strip()
            tenants_text = re.search(r'<div class="flex flex-1 border-r border-r-solid border-r-cardbordercolor">.*?Preferred Tenants.*?<div>(.*?)</div>', element).group(1).strip()
            availability_text = re.search(r'<div class="flex flex-1 pl-0.5p">.*?Available From.*?<div>(.*?)</div>', element).group(1).strip()

            # Append extracted data to respective lists
            property_titles.append(title_text)
            locations.append(location_text)
            rent_prices.append(rent_price_text)
            deposit_prices.append(deposit_price_text)
            builtup_areas.append(builtup_area_text)
            image_urls.append(image_url)
            property_types.append(property_type_text)
            furnishing_statuses.append(furnishing_text)
            preferred_tenants.append(tenants_text)
            availabilities.append(availability_text)

        # Introduce a delay between requests
        time.sleep(random.uniform(1, 2))

    except Exception as e:
        print(f"Error: {e}")

# Print the scraped data
print("Successfully scraped {} pages containing {} properties.".format(total_pages, len(property_titles)))
# Store the data in a CSV file (optional)
with open('output.csv', 'w', encoding='utf-8') as file:
    file.write("Property Title,Location,Rent Price,Deposit Price,Built-up Area,Image URL,Property Type,Furnishing,Preferred Tenants,Availability\n")
    for i in range(len(property_titles)):
        file.write(f"{property_titles[i]},{locations[i]},{rent_prices[i]},{deposit_prices[i]},{builtup_areas[i]},{image_urls[i]},{property_types[i]},{furnishing_statuses[i]},{preferred_tenants[i]},{availabilities[i]}\n")
