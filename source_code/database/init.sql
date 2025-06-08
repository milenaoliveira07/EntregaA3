CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(80) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    address VARCHAR(80), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE sellers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(80) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    registration VARCHAR(25) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE sales(
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    seller_id INT NOT NULL,
    sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Processing', 'Completed', 'Cancelled') DEFAULT 'Processing',
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (seller_id) REFERENCES sellers(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP    
);

CREATE TABLE sale_items(
    id INT AUTO_INCREMENT PRIMARY KEY,
    sale_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity_purchased INT NOT NULL,
    unit_price_sale DECIMAL(10,2) NOT NULL
);

CREATE TABLE products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    low_stock INT NOT NULL,
    category VARCHAR(40) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO clients (full_name, email, phone, address) VALUES
    ('Clara Guimarães Rosa', 
    'clara_G_rosa@gmail.com', 
    '71987654321', 
    'Caminho das Árvores, 985 - Salvador'),
    ('Carlos Eduardo Santos', 
    'carloseduardo1998@hotmail.com', 
    '21998765432', 
    'Avenida Central, 406 - Rio de Janeiro'),
    ('Mateus Bispo Lima', 
    'limabispo@yahoo.com', 
    '31976543210', 
    'Travessa da Paz, 85 - Belo Horizonte'),
    ('George Mueller Cachoeira', 
    'gm_cachoeira@gmail.com', 
    '41965432109', 
    'Praça da Liberdade, 101 - Curitiba'),
    ('Hudson Castro França', 
    'hudsoncastro24@gmail.com', 
    '73982496370', 
    'Alameda dos Sonhos, 258 - Porto Alegre');

INSERT INTO sellers (full_name, email, registration) VALUES
    ('Paula Soares', 
    'paulinha25soares@hotmail.com', 
    '123456789'),
    ('Milena Oliveira', 
    'milena.adicional@gmail.com', 
    '987654321'),
    ('Jonas Carvalho', 
    'jonas.carvalho@yahoo.com', 
    '456789123');

INSERT INTO products (name, description, price, stock_quantity, low_stock, category) VALUES
    ('Mouse Gamer HyperX Pulsefire', 
    'Mouse óptico com RGB, 16000 DPI e 8 botões programáveis.',
    199.90,
    50,
    10,
    'Periféricos'),
    ('Teclado Mecânico Redragon Kumara', 
    'Teclado mecânico RGB com switch Outemu Red e layout ABNT2.', 
    289.99, 
    30, 
    5, 
    'Periféricos'),
    ('Headset Gamer Astro A10', 
    'Headset com drivers de 40mm, microfone flip-to-mute e conforto para longas sessões.', 
    349.00, 
    40, 
    8, 
    'Áudio'),
    ('Monitor Dell UltraSharp 24"', 
    'Monitor IPS Full HD (1920x1080) de 24 polegadas com bordas finas.', 
    899.50, 
    25, 
    5, 
    'Monitores'),
    ('Webcam Logitech C920S', 
    'Webcam Full HD 1080p com correção de luz e privacidade.', 
    450.00, 
    60, 
    12, 
    'Periféricos'),
    ('SSD Kingston A400 480GB', 
    'SSD SATA III de 480GB para inicialização rápida e armazenamento.', 
    299.00, 
    70, 
    15, 
    'Armazenamento'),
    ('Roteador TP-Link Archer C6',
    'Roteador Wi-Fi AC1200 Dual Band com 4 antenas externas.', 
    180.00, 
    35, 
    7, 
    'Redes'),
    ('Placa de Vídeo Gigabyte RTX 3050', 
    'Placa de vídeo NVIDIA GeForce RTX 3050 com 8GB GDDR6.', 
    1899.00, 
    15, 
    3, 
    'Componentes'),
    ('Notebook Gamer Acer Nitro 5', 
    'Notebook com processador i5, 8GB RAM, GTX 1650 e tela 144Hz.', 
    4500.00, 
    10, 
    2, 
    'Notebooks'),
    ('Cadeira Gamer ThunderX3 BC3', 
    'Cadeira ergonômica com encosto reclinável e apoio lombar ajustável.', 
    999.00, 
    20, 
    4, 
    'Acessórios');

INSERT INTO sales (client_id, seller_id, sale_date, status) VALUES
    (1, 1, '2023-10-01 10:00:00', 'Completed'),
    (2, 2, '2023-10-02 11:30:00', 'Processing'),
    (3, 3, '2023-10-03 14:15:00', 'Cancelled'),
    (4, 1, '2023-10-04 09:45:00', 'Completed'),
    (5, 2, '2023-10-05 16:20:00', 'Processing');
    
INSERT INTO sale_items (sale_id, product_id, quantity_purchased, unit_price_sale) VALUES
    (1, 1, 2, 199.90),
    (1, 2, 1, 289.99),
    (1, 3, 1, 349.00),
    (2, 4, 1, 899.50),
    (3, 5, 1, 450.00),
    (4, 6, 1, 299.00),
    (4, 7, 2, 180.00),
    (5, 8, 1, 1899.00),
    (5, 9, 1, 4500.00);
