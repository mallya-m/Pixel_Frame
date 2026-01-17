
        // Navigation Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    navMenu.classList.remove('active');
                }
            });
        });

        // Gallery Filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Cost Calculator
        function updateQty(service, change) {
            const qtyInput = document.getElementById(`qty-${service}`);
            let currentQty = parseInt(qtyInput.value);
            currentQty += change;
            if (currentQty < 1) currentQty = 1;
            qtyInput.value = currentQty;
            calculateTotal();
        }

        function calculateTotal() {
            let total = 0;
            const checkboxes = document.querySelectorAll('.calc-checkbox');
            
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    const service = checkbox.getAttribute('data-service');
                    const price = parseInt(checkbox.getAttribute('data-price'));
                    const qty = parseInt(document.getElementById(`qty-${service}`).value);
                    total += price * qty;
                }
            });
            
            document.getElementById('totalAmount').textContent = total.toLocaleString('en-IN');
        }

        document.querySelectorAll('.calc-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', calculateTotal);
        });

        // Download Quote
        function downloadQuote() {
            const checkboxes = document.querySelectorAll('.calc-checkbox:checked');
            if (checkboxes.length === 0) {
                alert('Please select at least one service');
                return;
            }
            
            let quoteText = '=== PIXELFRAME PHOTOGRAPHY QUOTE ===\n\n';
            quoteText += 'Date: ' + new Date().toLocaleDateString() + '\n\n';
            quoteText += 'Selected Services:\n';
            quoteText += '-----------------------------------\n';
            
            let total = 0;
            checkboxes.forEach(checkbox => {
                const service = checkbox.getAttribute('data-service');
                const price = parseInt(checkbox.getAttribute('data-price'));
                const qty = parseInt(document.getElementById(`qty-${service}`).value);
                const subtotal = price * qty;
                total += subtotal;
                
                const serviceName = checkbox.closest('.calc-item').querySelector('h4').textContent;
                quoteText += `${serviceName}\n`;
                quoteText += `Quantity: ${qty}\n`;
                quoteText += `Price per unit: ₹${price.toLocaleString('en-IN')}\n`;
                quoteText += `Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n\n`;
            });
            
            quoteText += '-----------------------------------\n';
            quoteText += `TOTAL COST: ₹${total.toLocaleString('en-IN')}\n\n`;
            quoteText += 'Thank you for choosing PixelFrame!\n';
            quoteText += 'Contact: +91 98765 43210\n';
            quoteText += 'Email: info@pixelframe.com';
            
            const blob = new Blob([quoteText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'PixelFrame_Quote.txt';
            a.click();
            URL.revokeObjectURL(url);
        }

        // Form Validation
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name').value.trim();
            if (name.length < 2) {
                showError('nameError');
                isValid = false;
            } else {
                hideError('nameError');
            }
            
            // Email validation
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('emailError');
                isValid = false;
            } else {
                hideError('emailError');
            }
            
            // Phone validation
            const phone = document.getElementById('phone').value.trim();
            const phoneRegex = /^[6-9]\d{9}$/;
            if (!phoneRegex.test(phone)) {
                document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
                showError('phoneError');
                isValid = false;
            } else {
                hideError('phoneError');
            }
            
            // Message validation
            const message = document.getElementById('message').value.trim();
            if (message.length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
                showError('messageError');
                isValid = false;
            } else {
                hideError('messageError');
            }
            
            if (isValid) {
                document.getElementById('successMessage').style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
            }
        });

        function showError(errorId) {
            document.getElementById(errorId).style.display = 'block';
        }

        function hideError(errorId) {
            document.getElementById(errorId).style.display = 'none';
        }

        // File Upload and Read
        const fileUpload = document.getElementById('fileUpload');
        
        fileUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                
                reader.onload = (event) => {
                    const content = event.target.result;
                    const fileContentDiv = document.getElementById('fileContent');
                    fileContentDiv.style.display = 'block';
                    fileContentDiv.innerHTML = `<strong>File Content:</strong><br><pre style="white-space: pre-wrap;">${content}</pre>`;
                    
                    // Try to parse and fill form
                    try {
                        const lines = content.split('\n');
                        lines.forEach(line => {
                            if (line.includes('Name:')) {
                                document.getElementById('name').value = line.split(':')[1].trim();
                            } else if (line.includes('Email:')) {
                                document.getElementById('email').value = line.split(':')[1].trim();
                            } else if (line.includes('Phone:')) {
                                document.getElementById('phone').value = line.split(':')[1].trim();
                            } else if (line.includes('Service:')) {
                                document.getElementById('service').value = line.split(':')[1].trim();
                            } else if (line.includes('Message:')) {
                                const messageStart = content.indexOf('Message:') + 8;
                                document.getElementById('message').value = content.substring(messageStart).trim();
                            }
                        });
                    } catch (error) {
                        console.log('Could not parse file content');
                    }
                };
                
                reader.readAsText(file);
            }
        });

        // Save Feedback to File
        function saveFeedbackToFile() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !phone || !message) {
                alert('Please fill in all required fields before saving');
                return;
            }
            
            let feedbackText = '=== PIXELFRAME FEEDBACK ===\n\n';
            feedbackText += `Name: ${name}\n`;
            feedbackText += `Email: ${email}\n`;
            feedbackText += `Phone: ${phone}\n`;
            feedbackText += `Service: ${service}\n`;
            feedbackText += `Message: ${message}\n\n`;
            feedbackText += `Date: ${new Date().toLocaleString()}\n`;
            
            const blob = new Blob([feedbackText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'PixelFrame_Feedback.txt';
            a.click();
            URL.revokeObjectURL(url);
            
            alert('Feedback saved successfully!');
        }
