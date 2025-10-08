// Configuração da WiinPay
const WIINPAY_CONFIG = {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdG9yLmV4cDAzM0BnbWFpbC5jb20iLCJpYXQiOjE3NTk4ODc5MDR9.2ZSV6jSkIx0BtYjWcWRdxC6GaNX2M4XJDwBuTch_h5g',
    pixKey: 'vitor.exp033@gmail.com',
    merchantName: 'CLOUD LAB'
};

// Dados dos produtos
const exclusiveProducts = [
    {
        id: 'love-thc',
        name: 'Love THC - Coração 2 em 1',
        image: 'LOVE THC.png',
        price: 474.00,
        stock: 5,
        description: 'Design exclusivo em formato de coração com tecnologia 2 em 1. Edição limitada especial com acabamento premium e funcionalidade dupla.'
    },
    {
        id: 'chave-thc',
        name: 'Chave THC - Chave de Carro',
        image: 'CHAVE THC.png',
        price: 474.00,
        stock: 4,
        description: 'Design ultra discreto que imita perfeitamente uma chave de carro. Ideal para uso público sem chamar atenção. Qualidade premium americana.'
    }
];

const limitedProducts = [
    {
        id: 'fufu-thc',
        name: 'Fufu THC - Personagem Kawaii',
        image: 'FUFU THC.png',
        price: 599.99,
        stock: 3,
        description: 'Design kawaii exclusivo com personagem fofo. Edição limitada com acabamento especial e cores vibrantes.'
    },
    {
        id: 'raygan-thc',
        name: 'Raygan THC - Pistola de Raio',
        image: 'RAYGAN THC.png',
        price: 599.99,
        stock: 2,
        description: 'Design futurista inspirado em pistola de raio. Tecnologia avançada com LED integrado e design sci-fi único.'
    },
    {
        id: 'robo-thc',
        name: 'Robot THC - Robô com Controle',
        image: 'ROBO THC.png',
        price: 599.99,
        stock: 4,
        description: 'Design robótico inovador com controle remoto funcional. Edição limitada para colecionadores tech.'
    }
];

const basicProducts = [
    {
        id: 'canetao-thc',
        name: 'Canetão THC - Caneta Gigante',
        image: 'CANETAO THC.png',
        price: 399.99,
        stock: 8,
        description: 'Design escolar clássico em tamanho aumentado. Perfeito para uso discreto em ambientes profissionais.'
    },
    {
        id: 'darksaber-thc',
        name: 'Darksaber THC - Sabre das Trevas',
        image: 'DARSABER THC.png',
        price: 399.99,
        stock: 6,
        description: 'Design inspirado no universo galáctico. Acabamento metálico premium com detalhes únicos.'
    },
    {
        id: 'gucci-thc',
        name: 'Gucci THC - Estilo Luxo',
        image: 'GUCCI THC.png',
        price: 399.99,
        stock: 5,
        description: 'Design luxuoso inspirado em marcas premium. Acabamento sofisticado para uso elegante.'
    },
    {
        id: 'lapis-thc',
        name: 'Lapíseira THC - Escolar',
        image: 'LAPÍSEIRA THC.png',
        price: 399.99,
        stock: 7,
        description: 'Design escolar clássico que passa despercebido. Ideal para estudantes e profissionais.'
    },
    {
        id: 'lip-thc',
        name: 'Lip Born THC - Batom',
        image: 'LIP BORN THC.png',
        price: 399.99,
        stock: 9,
        description: 'Design feminino discreto em formato de batom. Perfeito para uso público elegante.'
    },
    {
        id: 'bolsa-thc',
        name: 'Mini Bolsa THC - Bolsinha',
        image: 'MINI BOLSA THC.png',
        price: 399.99,
        stock: 4,
        description: 'Design ultra compacto em formato de mini bolsa. Máxima discrição e portabilidade.'
    },
    {
        id: 'refil-thc',
        name: 'Refil THC - Caneta Refil',
        image: 'REFIL THC.png',
        price: 399.99,
        stock: 6,
        description: 'Design minimalista de refil de caneta. Extremamente discreto para qualquer ambiente.'
    }
];

// Variáveis globais
let currentProduct = null;
let selectedPaymentMethod = 'pix';

// Função para criar card de produto
function createProductCard(product, category) {
    const strainCounts = { indica: 0, sativa: 0, hibrida: 0 };
    
    const badgeClass = category === 'exclusive' ? 'badge-exclusive' : 
                     category === 'limited' ? 'badge-limited' : 'badge-basic';
    
    const badgeText = category === 'exclusive' ? 'EXCLUSIVO' : 
                     category === 'limited' ? 'EDIÇÃO LIMITADA' : 'MELHOR CUSTO-BENEFÍCIO';

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="badge-frete">🚚 FRETE GRÁTIS</div>
            <div class="product-badge ${badgeClass}">${badgeText}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7cHJvZHVjdC5uYW1lfTwvdGV4dD48L3N2Zz4='">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <div class="strains-selector">
                <div class="strains-title">Selecione as Strains:</div>
                <div class="strain-item">
                    <span>Indica</span>
                    <div class="strain-controls">
                        <button class="strain-btn" onclick="updateStrain('${product.id}', 'indica', -1)">-</button>
                        <span class="strain-count" id="${product.id}-indica">0</span>
                        <button class="strain-btn" onclick="updateStrain('${product.id}', 'indica', 1)">+</button>
                    </div>
                </div>
                <div class="strain-item">
                    <span>Sativa</span>
                    <div class="strain-controls">
                        <button class="strain-btn" onclick="updateStrain('${product.id}', 'sativa', -1)">-</button>
                        <span class="strain-count" id="${product.id}-sativa">0</span>
                        <button class="strain-btn" onclick="updateStrain('${product.id}', 'sativa', 1)">+</button>
                    </div>
                </div>
                <div class="strain-item">
                    <span>Híbrida</span>
                    <div class="strain-controls">
                        <button class="strain-btn" onclick="updateStrain('${product.id}', 'hibrida', -1)">-</button>
                        <span class="strain-count" id="${product.id}-hibrida">0</span>
                        <button class="strain-btn" onclick="updateStrain('${product.id}', 'hibrida', 1)">+</button>
                    </div>
                </div>
            </div>
            <div class="purchase-buttons">
                <button class="purchase-btn" onclick="handleCheckout('${product.id}', 1)">
                    Comprar 1 unidade - R$ ${product.price.toFixed(2)}
                </button>
                <button class="purchase-btn" id="${product.id}-btn-3" onclick="handleCheckout('${product.id}', 3)" disabled>
                    Comprar 3 unidades - R$ ${(product.price * 3 * 0.82).toFixed(2)} <span style="color: #28a745;">(18% OFF)</span>
                </button>
                <button class="purchase-btn" id="${product.id}-btn-5" onclick="handleCheckout('${product.id}', 5)" disabled>
                    Comprar 5 unidades - R$ ${(product.price * 5 * 0.62).toFixed(2)} <span style="color: #28a745;">(38% OFF)</span>
                </button>
            </div>
        </div>
    `;
}

// Função para atualizar strain
function updateStrain(productId, strainType, change) {
    const countElement = document.getElementById(`${productId}-${strainType}`);
    let currentCount = parseInt(countElement.textContent);
    let newCount = Math.max(0, currentCount + change);
    
    countElement.textContent = newCount;
    updatePurchaseButtons(productId);
}

// Função para atualizar botões de compra
function updatePurchaseButtons(productId) {
    const indica = parseInt(document.getElementById(`${productId}-indica`).textContent);
    const sativa = parseInt(document.getElementById(`${productId}-sativa`).textContent);
    const hibrida = parseInt(document.getElementById(`${productId}-hibrida`).textContent);
    
    const totalStrains = indica + sativa + hibrida;
    
    const btn3 = document.getElementById(`${productId}-btn-3`);
    const btn5 = document.getElementById(`${productId}-btn-5`);
    
    if (btn3) btn3.disabled = totalStrains < 3;
    if (btn5) btn5.disabled = totalStrains < 5;
}

// Função para obter strains selecionadas
function getSelectedStrains(productId) {
    const indica = parseInt(document.getElementById(`${productId}-indica`).textContent);
    const sativa = parseInt(document.getElementById(`${productId}-sativa`).textContent);
    const hibrida = parseInt(document.getElementById(`${productId}-hibrida`).textContent);
    
    return { indica, sativa, hibrida, total: indica + sativa + hibrida };
}

// Função para mostrar aviso de strain
function showStrainWarning() {
    const warning = document.getElementById('strain-warning');
    warning.style.display = 'block';
    setTimeout(() => {
        warning.style.display = 'none';
    }, 3000);
}

// Função para lidar com checkout
function handleCheckout(productId, quantity) {
    const strains = getSelectedStrains(productId);
    
    if (strains.total === 0) {
        showStrainWarning();
        return;
    }
    
    if (quantity > 1 && strains.total < quantity) {
        alert(`Para comprar ${quantity} unidades, você precisa selecionar ${quantity} strains.`);
        return;
    }
    
    openCheckout(productId, quantity);
}

// Função para abrir checkout
function openCheckout(productId, quantity) {
    const allProducts = [...exclusiveProducts, ...limitedProducts, ...basicProducts];
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) return;
    
    currentProduct = { ...product, quantity };
    const strains = getSelectedStrains(productId);
    
    let discount = 0;
    if (quantity === 3) discount = 0.18;
    if (quantity === 5) discount = 0.38;
    
    const subtotal = product.price * quantity;
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;
    
    const orderSummary = `
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <h3>Resumo do Pedido</h3>
            <p><strong>Produto:</strong> ${product.name}</p>
            <p><strong>Quantidade:</strong> ${quantity} unidade(s)</p>
            <p><strong>Strains:</strong> ${Object.entries(strains).filter(([key, value]) => key !== 'total' && value > 0).map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`).join(', ')}</p>
            <p><strong>Subtotal:</strong> R$ ${subtotal.toFixed(2)}</p>
            ${discount > 0 ? `<p><strong>Desconto (${(discount * 100).toFixed(0)}%):</strong> -R$ ${discountAmount.toFixed(2)}</p>` : ''}
            <p><strong>Frete:</strong> <span style="color: #28a745;">GRÁTIS</span></p>
            <hr>
            <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
        </div>
    `;
    
    document.getElementById('order-summary').innerHTML = orderSummary;
    document.getElementById('checkoutModal').style.display = 'block';
}

// Função para abrir checkout de teste
function openTestCheckout() {
    currentProduct = {
        id: 'test',
        name: 'Teste de Pagamento',
        price: 1.00,
        quantity: 1
    };
    
    const orderSummary = `
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <h3>Checkout de Teste - R$ 1,00</h3>
            <p><strong>Produto:</strong> Teste de Pagamento</p>
            <p><strong>Quantidade:</strong> 1 unidade</p>
            <p><strong>Strain:</strong> Híbrida: 1</p>
            <p><strong>Frete:</strong> <span style="color: #28a745;">GRÁTIS</span></p>
            <hr>
            <p><strong>Total:</strong> R$ 1,00</p>
        </div>
    `;
    
    document.getElementById('order-summary').innerHTML = orderSummary;
    document.getElementById('checkoutModal').style.display = 'block';
}

// Função para fechar checkout
function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
    document.getElementById('strain-warning').style.display = 'none';
}

// Função para processar pagamento
async function processPayment(orderData) {
    try {
        // Simular chamada para WiinPay API
        const response = await fetch('https://api.wiinpay.com.br/v1/payments/pix', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${WIINPAY_CONFIG.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: Math.round(orderData.amount * 100), // Em centavos
                description: orderData.description,
                customer: {
                    name: orderData.customer.name,
                    email: orderData.customer.email,
                    phone: orderData.customer.phone
                },
                pix_key: WIINPAY_CONFIG.pixKey
            })
        });
        
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Erro na API da WiinPay');
        }
    } catch (error) {
        console.log('Usando sistema de fallback para PIX');
        // Sistema de fallback - gerar PIX manual
        return generateFallbackPix(orderData);
    }
}

// Função para gerar PIX de fallback
function generateFallbackPix(orderData) {
    const pixKey = WIINPAY_CONFIG.pixKey;
    const merchantName = WIINPAY_CONFIG.merchantName;
    const amount = orderData.amount.toFixed(2);
    const txId = 'CLB' + Date.now().toString().slice(-8);
    
    // Gerar código PIX no formato EMV
    const pixCode = generatePixEMV(pixKey, merchantName, amount, txId);
    
    return {
        success: true,
        pix_code: pixCode,
        qr_code_url: null, // Será gerado pelo JavaScript
        amount: amount,
        expires_at: new Date(Date.now() + 30 * 60 * 1000).toISOString()
    };
}

// Função para gerar código PIX EMV
function generatePixEMV(pixKey, merchantName, amount, txId) {
    // Formato simplificado do PIX EMV
    const payload = `00020126580014BR.GOV.BCB.PIX0136${pixKey}520400005303986540${amount.length.toString().padStart(2, '0')}${amount}5802BR5913${merchantName}6009SAO PAULO62070503***6304`;
    
    // Calcular CRC16 (simplificado)
    const crc = calculateCRC16(payload);
    return payload + crc;
}

// Função para calcular CRC16 (simplificado)
function calculateCRC16(data) {
    // Implementação simplificada do CRC16
    let crc = 0xFFFF;
    for (let i = 0; i < data.length; i++) {
        crc ^= data.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            if (crc & 0x8000) {
                crc = (crc << 1) ^ 0x1021;
            } else {
                crc <<= 1;
            }
        }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

// Função para mostrar modal PIX
function showPixModal(pixData) {
    document.getElementById('pix-amount').textContent = pixData.amount;
    document.getElementById('pix-code').value = pixData.pix_code;
    
    // Gerar QR Code
    const qrContainer = document.getElementById('qr-code');
    qrContainer.innerHTML = '';
    
    if (typeof QRCode !== 'undefined') {
        QRCode.toCanvas(qrContainer, pixData.pix_code, {
            width: 200,
            height: 200,
            margin: 2
        }, function (error) {
            if (error) {
                qrContainer.innerHTML = '<p>QR Code não disponível</p>';
            }
        });
    } else {
        qrContainer.innerHTML = '<p>Carregando QR Code...</p>';
    }
    
    document.getElementById('pixModal').style.display = 'block';
}

// Função para copiar código PIX
function copyPixCode() {
    const pixCode = document.getElementById('pix-code');
    pixCode.select();
    document.execCommand('copy');
    alert('Código PIX copiado!');
}

// Função para fechar modal PIX
function closePixModal() {
    document.getElementById('pixModal').style.display = 'none';
}

// Função para confirmar pagamento
function confirmPayment() {
    alert('Obrigado! Seu pagamento será processado em breve. Você receberá uma confirmação por email.');
    closePixModal();
    closeCheckout();
}

// Função para carregar produtos exclusivos
function loadExclusiveProducts() {
    const container = document.getElementById('exclusive-products');
    if (container) {
        container.innerHTML = exclusiveProducts.map(product => createProductCard(product, 'exclusive')).join('');
    }
}

// Função para carregar produtos de edição limitada
function loadLimitedProducts() {
    const container = document.getElementById('limited-products');
    if (container) {
        container.innerHTML = limitedProducts.map(product => createProductCard(product, 'limited')).join('');
    }
}

// Função para carregar produtos básicos
function loadBasicProducts() {
    const container = document.getElementById('basic-products');
    if (container) {
        container.innerHTML = basicProducts.map(product => createProductCard(product, 'basic')).join('');
    }
}

// Função principal para carregar todos os produtos
function loadProducts() {
    console.log('Carregando produtos...');
    loadExclusiveProducts();
    loadLimitedProducts();
    loadBasicProducts();
    console.log('Produtos carregados com sucesso!');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, iniciando aplicação...');
    loadProducts();
    
    // Event listener para métodos de pagamento
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');
            selectedPaymentMethod = this.dataset.method;
        });
    });
    
    // Event listener para formulário de checkout
    document.getElementById('checkout-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '⏳ Processando...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(this);
            const orderData = {
                product: currentProduct,
                customer: {
                    name: document.getElementById('customer-name').value,
                    email: document.getElementById('customer-email').value,
                    phone: document.getElementById('customer-phone').value,
                    cep: document.getElementById('customer-cep').value
                },
                payment_method: selectedPaymentMethod,
                amount: currentProduct.price * currentProduct.quantity,
                description: `${currentProduct.name} - ${currentProduct.quantity} unidade(s)`
            };
            
            if (selectedPaymentMethod === 'pix') {
                const pixResponse = await processPayment(orderData);
                if (pixResponse.success) {
                    closeCheckout();
                    showPixModal(pixResponse);
                } else {
                    throw new Error('Erro ao processar pagamento PIX');
                }
            } else {
                alert('Método de pagamento em desenvolvimento. Use PIX por enquanto.');
            }
        } catch (error) {
            console.error('Erro no checkout:', error);
            alert('Erro ao processar pedido. Tente novamente.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
});

// Fechar modais ao clicar fora
window.addEventListener('click', function(event) {
    const checkoutModal = document.getElementById('checkoutModal');
    const pixModal = document.getElementById('pixModal');
    
    if (event.target === checkoutModal) {
        closeCheckout();
    }
    if (event.target === pixModal) {
        closePixModal();
    }
});

console.log('Script Cloud Lab carregado com sucesso!');
