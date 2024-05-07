// Debounce function to manage function calls 

function debounce(func, delay) { 

	let debounceTimer; 

	return function () { 

			const context = this; 

			const args = arguments; 

			clearTimeout(debounceTimer); 

			debounceTimer = setTimeout(() => func.apply(context, args), delay); 

				}; 

				} 

  

			// Handle user search input 

			function handleSearch() { 

				const searchQuery = document.querySelector('.main-section .search-bar > input').value; 

				if (searchQuery.length > 0) { 

					MadCap.SearchHelper.SearchPane.Search(searchQuery, { searchContent: true }).then(displayResults); 

				} else { 

					clearResults(); 

				} 

			} 

  

			// Display search results dynamically 

			function displayResults(results) {
				const dropdown = document.getElementById('searchResultsDropdown');
				dropdown.innerHTML = '';

				results.content.slice(0, 5).forEach(item => {
					const resultItem = document.createElement('li');
				const title = document.createElement('div');
				title.classList.add('title');
				title.textContent = item.Title; // Assuming item.Title is the H1 topic title
				resultItem.appendChild(title);

				resultItem.addEventListener('click', () => {
					window.location.href = item.Link;
				});

			dropdown.appendChild(resultItem);
			});
		}


	// Clear the dropdown results 

	function clearResults() { 

		const dropdown = document.getElementById('searchResultsDropdown'); 

		dropdown.innerHTML = ''; 

	} 

  

	// Initialize the dynamic search feature 

	$(document).ready(function () { 

			document.querySelector('.main-section .search-bar > input').addEventListener('input', debounce(handleSearch, 300)); 

			const dropdown = document.createElement('ul'); 

			dropdown.id = 'searchResultsDropdown'; 

			document.querySelector('.main-section .search-bar').appendChild(dropdown); 

		}); 

  

	// Hide dropdown on outside click 

	function hideDropDown(event) { 

		const searchResultsDropdown = document.getElementById('searchResultsDropdown'); 

		if (!event.target.closest(".search-field")) { 

			searchResultsDropdown.style.visibility = "hidden"; 

		} 

	} 

  

	document.addEventListener("click", hideDropDown);