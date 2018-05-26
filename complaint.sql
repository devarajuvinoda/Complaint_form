CREATE TABLE complaintForm(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    complaint_type VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    received_at TIMESTAMP DEFAULT NOW(),
    status VARCHAR(20) NOT NULL DEFAULT 'no'
);

INSERT INTO complaintForm(name, email, phone, designation, department, complaint_type, description) 
VALUES ('faker raj',
        'faker@gmail.com',
        '677-239-9878',
        'engineer',
        'Engineering',
        'Food',
        'bad quality food.');
        
SELECT name, email, phone, received_at FROM complaintForm ORDER BY created_at LIMIT 1;
