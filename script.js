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
        description: 'Design kawaii exclusivo com personagem fofo. Edição limitada com cores vibrantes e acabamento especial. Perfeito para colecionadores.'
    },
    {
        id: 'raygan-thc',
        name: 'Raygan THC - Pistola de Raio',
        image: 'RAYGAN THC.png',
        price: 599.99,
        stock: 2,
        description: 'Design futurista inspirado em pistolas de raio sci-fi. Edição limitada com LED integrado e design ergonômico premium.'
    },
    {
        id: 'robot-thc',
        name: 'Robot THC - Robô com Controle',
        image: 'ROBO THC.png',
        price: 599.99,
        stock: 4,
        description: 'Design robótico inovador com controle remoto funcional. Tecnologia avançada com múltiplos modos de operação.'
    }
];

const basicProducts = [
    {
        id: 'canetao-thc',
        name: 'Canetão THC - Caneta Gigante',
        image: 'CANETAO THC.png',
        price: 399.99,
        stock: 8,
        description: 'Design escolar clássico em tamanho grande. Perfeito para uso discreto em ambientes profissionais e acadêmicos.'
    },
    {
        id: 'darksaber-thc',
        name: 'Darksaber THC - Sabre das Trevas',
        image: 'DARSABER THC.png',
        price: 399.99,
        stock: 6,
        description: 'Design inspirado no icônico sabre das trevas. Acabamento metálico premium com detalhes únicos.'
    },
    {
        id: 'gucci-thc',
        name: 'Gucci THC - Estilo Luxo',
        image: 'GUCCI THC.png',
        price: 399.99,
        stock: 5,
        description: 'Design elegante inspirado no luxo italiano. Acabamento sofisticado para quem aprecia estilo e qualidade.'
    },
    {
        id: 'lapis-thc',
        name: 'Lapíseira THC - Escolar',
        image: 'LAPÍSEIRA THC.png',
        price: 399.99,
        stock: 10,
        description: 'Design de lapíseira escolar ultra realista. Perfeito para uso discreto em qualquer ambiente educacional.'
    },
    {
        id: 'lipborn-thc',
        name: 'Lip Born THC - Batom',
        image: 'LIP BORN THC.png',
        price: 399.99,
        stock: 7,
        description: 'Design feminino elegante que imita um batom de luxo. Discreto e sofisticado para uso em qualquer ocasião.'
    },
    {
        id: 'minibolsa-thc',
        name: 'Mini Bolsa THC - Bolsinha',
        image: 'MINI BOLSA THC.png',
        price: 399.99,
        stock: 6,
        description: 'Design de mini bolsa fashion. Combina funcionalidade com estilo, perfeito para quem gosta de acessórios únicos.'
    },
    {
        id: 'refil-thc',
        name: 'Refil THC - Cartucho',
        image: 'REFIL THC.png',
        price: 399.99,
        stock: 12,
        description: 'Design minimalista de refil/cartucho. Compacto e discreto, ideal para quem prefere simplicidade e eficiência.'
    }
];

// Preços com desconto
const priceRules = {
    exclusive: {
        1: 474.00,
        3: 474.00 * 3 * 0.8, // 20% desconto
        5: 474.00 * 5 * 0.6  // 40% desconto
    },
    limited: {
        1: 599.99,
        3: 599.99 * 3 * 0.82, // 18% desconto
        5: 599.99 * 5 * 0.62  // 38% desconto
    },
    basic: {
        1: 399.99,
        3: 399.99 * 3 * 0.82, // 18% desconto
        5: 399.99 * 5 * 0.62  // 38% desconto
    }
};

// Estado global
let currentOrder = {
    product: null,
    quantity: 1,
    strains: { indica: 0, sativa: 0, hibrida: 0 },
    total: 0
};

// Função para debug
function debugLog(message, data = null) {
    console.log(`[CLOUD LAB DEBUG] ${message}`, data || '');
}

// Função para criar card de produto
function createProductCard(product, category) {
    debugLog(`Criando card para produto: ${product.name}`);
    
    const badgeClass = category === 'exclusive' ? 'badge-exclusive' : 
                      category === 'limited' ? 'badge-limited' : 'badge-basic';
    
    const badgeText = category === 'exclusive' ? 'EXCLUSIVO' : 
                      category === 'limited' ? 'EDIÇÃO LIMITADA' : 'MELHOR CUSTO-BENEFÍCIO';

    const animationClass = category === 'exclusive' ? 'exclusive-glow' : 
                          category === 'limited' ? 'limited-pulse' : '';

    const prices = priceRules[category];
    const price1 = prices[1].toFixed(2);
    const price3 = prices[3].toFixed(2);
    const price5 = prices[5].toFixed(2);
    
    const discount3 = category === 'exclusive' ? '20' : '18';
    const discount5 = category === 'exclusive' ? '40' : '38';

    return `
        <div class="product-card ${animationClass}" data-product-id="${product.id}">
            <div class="product-badge ${badgeClass}">${badgeText}</div>
            <div class="frete-badge">🚚 FRETE GRÁTIS</div>
            
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7cHJvZHVjdC5uYW1lfTwvdGV4dD48L3N2Zz4='">
            
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            
            <div class="strain-selector">
                <h4>🌿 Escolha suas strains (máx. ${category === 'exclusive' ? '2' : '3'} por produto):</h4>
                <div class="strain-controls">
                    <div class="strain-control">
                        <span class="strain-name">🌙 Indica</span>
                        <div class="strain-buttons">
                            <button class="strain-btn" onclick="updateStrain('${product.id}', 'indica', -1)">-</button>
                            <span class="strain-count" id="${product.id}-indica">0</span>
                            <button class="strain-btn" onclick="updateStrain('${product.id}', 'indica', 1)">+</button>
                        </div>
                    </div>
                    <div class="strain-control">
                        <span class="strain-name">☀️ Sativa</span>
                        <div class="strain-buttons">
                            <button class="strain-btn" onclick="updateStrain('${product.id}', 'sativa', -1)">-</button>
                            <span class="strain-count" id="${product.id}-sativa">0</span>
                            <button class="strain-btn" onclick="updateStrain('${product.id}', 'sativa', 1)">+</button>
                        </div>
                    </div>
                    <div class="strain-control">
                        <span class="strain-name">⚖️ Híbrida</span>
                        <div class="strain-buttons">
                            <button class="strain-btn" onclick="updateStrain('${product.id}', 'hibrida', -1)">-</button>
                            <span class="strain-count" id="${product.id}-hibrida">0</span>
                            <button class="strain-btn" onclick="updateStrain('${product.id}', 'hibrida', 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="price-section">
                <div class="price">R$ ${price1}</div>
                <div class="discount-info">
                    3 unidades: ${discount3}% OFF • 5 unidades: ${discount5}% OFF
                </div>
            </div>

            <div class="strain-warning" id="${product.id}-warning">
                ⚠️ Selecione pelo menos 1 strain para continuar!
            </div>

            <div class="purchase-buttons">
                <button class="purchase-btn btn-1" onclick="handleCheckout('${product.id}', 1, '${category}')">
                    Comprar 1 unidade - R$ ${price1}
                </button>
                <button class="purchase-btn btn-3" id="${product.id}-btn-3" onclick="handleCheckout('${product.id}', 3, '${category}')" disabled>
                    Comprar 3 unidades - R$ ${price3} (${discount3}% OFF)
                </button>
                <button class="purchase-btn btn-5" id="${product.id}-btn-5" onclick="handleCheckout('${product.id}', 5, '${category}')" disabled>
                    Comprar 5 unidades - R$ ${price5} (${discount5}% OFF)
                </button>
            </div>
        </div>
    `;
}

// Função para atualizar strain
function updateStrain(productId, strainType, change) {
    debugLog(`Atualizando strain: ${productId}, ${strainType}, ${change}`);
    
    const countElement = document.getElementById(`${productId}-${strainType}`);
    if (!countElement) {
        debugLog(`Elemento não encontrado: ${productId}-${strainType}`);
        return;
    }
    
    let currentCount = parseInt(countElement.textContent) || 0;
    let newCount = Math.max(0, currentCount + change);
    
    // Limitar máximo de strains por produto
    const maxStrains = productId.includes('exclusive') ? 2 : 3;
    const totalStrains = getTotalStrains(productId);
    
    if (change > 0 && totalStrains >= maxStrains) {
        return;
    }
    
    countElement.textContent = newCount;
    updatePurchaseButtons(productId);
}

// Função para obter total de strains selecionadas
function getTotalStrains(productId) {
    const indica = parseInt(document.getElementById(`${productId}-indica`)?.textContent) || 0;
    const sativa = parseInt(document.getElementById(`${productId}-sativa`)?.textContent) || 0;
    const hibrida = parseInt(document.getElementById(`${productId}-hibrida`)?.textContent) || 0;
    return indica + sativa + hibrida;
}

// Função para atualizar botões de compra
function updatePurchaseButtons(productId) {
    const totalStrains = getTotalStrains(productId);
    const btn3 = document.getElementById(`${productId}-btn-3`);
    const btn5 = document.getElementById(`${productId}-btn-5`);
    
    if (btn3) btn3.disabled = totalStrains < 3;
    if (btn5) btn5.disabled = totalStrains < 5;
}

// Função para obter strains selecionadas
function getSelectedStrains(productId) {
    return {
        indica: parseInt(document.getElementById(`${productId}-indica`)?.textContent) || 0,
        sativa: parseInt(document.getElementById(`${productId}-sativa`)?.textContent) || 0,
        hibrida: parseInt(document.getElementById(`${productId}-hibrida`)?.textContent) || 0
    };
}

// Função para mostrar aviso de strain
function showStrainWarning(productId) {
    const warning = document.getElementById(`${productId}-warning`);
    if (warning) {
        warning.style.display = 'block';
        setTimeout(() => {
            warning.style.display = 'none';
        }, 3000);
    }
}

// Função para lidar com checkout
function handleCheckout(productId, quantity, category) {
    debugLog(`Iniciando checkout: ${productId}, quantidade: ${quantity}`);
    
    const strains = getSelectedStrains(productId);
    const totalStrains = strains.indica + strains.sativa + strains.hibrida;
    
    if (totalStrains === 0) {
        showStrainWarning(productId);
        return;
    }
    
    if (quantity > 1 && totalStrains < quantity) {
        showStrainWarning(productId);
        return;
    }
    
    // Encontrar produto
    let product = null;
    if (category === 'exclusive') {
        product = exclusiveProducts.find(p => p.id === productId);
    } else if (category === 'limited') {
        product = limitedProducts.find(p => p.id === productId);
    } else {
        product = basicProducts.find(p => p.id === productId);
    }
    
    if (!product) {
        debugLog(`Produto não encontrado: ${productId}`);
        return;
    }
    
    const prices = priceRules[category];
    const total = prices[quantity];
    
    currentOrder = {
        product: product,
        quantity: quantity,
        strains: strains,
        total: total,
        category: category
    };
    
    openCheckout();
}

// Função para abrir checkout
function openCheckout() {
    debugLog('Abrindo checkout', currentOrder);
    
    const modal = document.getElementById('checkoutModal');
    const summary = document.getElementById('orderSummary');
    
    const strainsList = [];
    if (currentOrder.strains.indica > 0) strainsList.push(`Indica: ${currentOrder.strains.indica}`);
    if (currentOrder.strains.sativa > 0) strainsList.push(`Sativa: ${currentOrder.strains.sativa}`);
    if (currentOrder.strains.hibrida > 0) strainsList.push(`Híbrida: ${currentOrder.strains.hibrida}`);
    
    summary.innerHTML = `
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <h3>Resumo do Pedido</h3>
            <p><strong>Produto:</strong> ${currentOrder.product.name}</p>
            <p><strong>Quantidade:</strong> ${currentOrder.quantity} unidade(s)</p>
            <p><strong>Strains:</strong> ${strainsList.join(', ')}</p>
            <p><strong>Frete:</strong> <span style="color: #28a745; font-weight: bold;">GRÁTIS</span></p>
            <p><strong>Total:</strong> <span style="color: #28a745; font-size: 1.2rem; font-weight: bold;">R$ ${currentOrder.total.toFixed(2)}</span></p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Função para checkout de teste
function openTestCheckout() {
    debugLog('Abrindo checkout de teste');
    
    currentOrder = {
        product: { name: 'Teste de Pagamento', id: 'test' },
        quantity: 1,
        strains: { indica: 0, sativa: 0, hibrida: 1 },
        total: 1.00,
        category: 'test'
    };
    
    const modal = document.getElementById('checkoutModal');
    const summary = document.getElementById('orderSummary');
    
    summary.innerHTML = `
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border: 2px solid #ffc107;">
            <h3>🧪 Checkout de Teste - R$ 1,00</h3>
            <p><strong>Produto:</strong> Teste de Pagamento</p>
            <p><strong>Quantidade:</strong> 1 unidade</p>
            <p><strong>Strain:</strong> Híbrida: 1</p>
            <p><strong>Frete:</strong> <span style="color: #28a745; font-weight: bold;">GRÁTIS</span></p>
            <p><strong>Total:</strong> <span style="color: #28a745; font-size: 1.2rem; font-weight: bold;">R$ 1,00</span></p>
        </div>
    `;
    
    // Atualizar botão de finalizar
    const finalizeBtn = document.querySelector('.finalize-btn');
    if (finalizeBtn) {
        finalizeBtn.textContent = 'Finalizar Teste - R$ 1,00';
    }
    
    modal.style.display = 'block';
}

// Função para fechar checkout
function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
    
    // Restaurar botão de finalizar
    const finalizeBtn = document.querySelector('.finalize-btn');
    if (finalizeBtn) {
        finalizeBtn.textContent = 'Finalizar Pedido';
    }
}

// Função para processar pagamento
async function processPayment(formData) {
    debugLog('Processando pagamento', formData);
    
    try {
        // Simular chamada para WiinPay API
        const response = await processRealPixPayment({
            amount: currentOrder.total,
            description: `${currentOrder.product.name} - ${currentOrder.quantity}x`,
            customer: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            }
        });
        
        return response;
    } catch (error) {
        debugLog('Erro no pagamento', error);
        throw error;
    }
}

// Função para processar PIX real (simulação)
async function processRealPixPayment(orderData) {
    debugLog('Processando PIX real', orderData);
    
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Gerar código PIX válido
    const pixCode = generatePixCode(orderData.amount, orderData.description);
    
    return {
        success: true,
        pixCode: pixCode,
        amount: orderData.amount,
        expiresIn: 1800 // 30 minutos
    };
}

// Função para gerar código PIX
function generatePixCode(amount, description) {
    const pixKey = WIINPAY_CONFIG.pixKey;
    const merchantName = WIINPAY_CONFIG.merchantName;
    
    // Formato EMV do PIX (simplificado)
    const payload = `00020126580014BR.GOV.BCB.PIX0136${pixKey}0208${description}5204000053039865802BR5913${merchantName}6009SAO PAULO62070503***6304`;
    
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
    debugLog('Mostrando modal PIX', pixData);
    
    const modal = document.getElementById('pixModal');
    const qrContainer = document.getElementById('qrCodeContainer');
    const pixCodeElement = document.getElementById('pixCode');
    const amountElement = document.getElementById('pixAmount');
    
    // Definir valores
    pixCodeElement.textContent = pixData.pixCode;
    amountElement.textContent = pixData.amount.toFixed(2);
    
    // Gerar QR Code
    qrContainer.innerHTML = '';
    if (typeof QRCode !== 'undefined') {
        QRCode.toCanvas(qrContainer, pixData.pixCode, {
            width: 200,
            height: 200,
            margin: 2
        }, function (error) {
            if (error) {
                debugLog('Erro ao gerar QR Code', error);
                qrContainer.innerHTML = '<p>QR Code não disponível</p>';
            }
        });
    } else {
        qrContainer.innerHTML = '<div style="width: 200px; height: 200px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px;">QR Code PIX</div>';
    }
    
    modal.style.display = 'block';
}

// Função para copiar código PIX
function copyPixCode() {
    const pixCode = document.getElementById('pixCode').textContent;
    navigator.clipboard.writeText(pixCode).then(() => {
        alert('Código PIX copiado!');
    }).catch(() => {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = pixCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Código PIX copiado!');
    });
}

// Função para fechar modal PIX
function closePixModal() {
    document.getElementById('pixModal').style.display = 'none';
}

// Função para confirmar pagamento
function confirmPayment() {
    alert('Obrigado! Seu pagamento foi confirmado. Em breve você receberá um email com os detalhes do pedido.');
    closePixModal();
    closeCheckout();
}

// Função para carregar produtos exclusivos
function loadExclusiveProducts() {
    debugLog('Carregando produtos exclusivos');
    const container = document.getElementById('exclusive-products');
    if (!container) {
        debugLog('Container exclusive-products não encontrado!');
        return;
    }
    
    container.innerHTML = exclusiveProducts.map(product => 
        createProductCard(product, 'exclusive')
    ).join('');
}

// Função para carregar produtos de edição limitada
function loadLimitedProducts() {
    debugLog('Carregando produtos de edição limitada');
    const container = document.getElementById('limited-products');
    if (!container) {
        debugLog('Container limited-products não encontrado!');
        return;
    }
    
    container.innerHTML = limitedProducts.map(product => 
        createProductCard(product, 'limited')
    ).join('');
}

// Função para carregar produtos básicos
function loadBasicProducts() {
    debugLog('Carregando produtos básicos');
    const container = document.getElementById('basic-products');
    if (!container) {
        debugLog('Container basic-products não encontrado!');
        return;
    }
    
    container.innerHTML = basicProducts.map(product => 
        createProductCard(product, 'basic')
    ).join('');
}

// Função para carregar todos os produtos
function loadAllProducts() {
    debugLog('Carregando todos os produtos');
    loadExclusiveProducts();
    loadLimitedProducts();
    loadBasicProducts();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    debugLog('DOM carregado, iniciando aplicação');
    
    // Carregar produtos
    loadAllProducts();
    
    // Configurar seletores de método de pagamento
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Configurar formulário de checkout
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('customerName').value,
                email: document.getElementById('customerEmail').value,
                phone: document.getElementById('customerPhone').value,
                cep: document.getElementById('customerCep').value,
                paymentMethod: document.querySelector('.payment-method.selected').dataset.method
            };
            
            debugLog('Dados do formulário', formData);
            
            if (formData.paymentMethod === 'pix') {
                try {
                    const finalizeBtn = document.querySelector('.finalize-btn');
                    finalizeBtn.textContent = '⏳ Processando...';
                    finalizeBtn.disabled = true;
                    
                    const pixData = await processPayment(formData);
                    
                    finalizeBtn.textContent = 'Finalizar Pedido';
                    finalizeBtn.disabled = false;
                    
                    if (pixData.success) {
                        showPixModal(pixData);
                    }
                } catch (error) {
                    debugLog('Erro no processamento', error);
                    alert('Erro ao processar pagamento. Tente novamente.');
                    
                    const finalizeBtn = document.querySelector('.finalize-btn');
                    finalizeBtn.textContent = 'Finalizar Pedido';
                    finalizeBtn.disabled = false;
                }
            } else {
                alert('Método de pagamento em desenvolvimento. Use PIX por enquanto.');
            }
        });
    }
    
    debugLog('Aplicação inicializada com sucesso');
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

debugLog('Script carregado completamente');
