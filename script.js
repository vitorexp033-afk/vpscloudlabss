// Variáveis globais
let currentCheckout = {};

// Produtos exclusivos
const exclusiveProducts = [
    {
        id: 'love-thc',
        name: 'Love THC - Coração 2 em 1',
        price: 474.00,
        image: 'LOVE THC.png',
        stock: 5,
        description: 'Design exclusivo em formato de coração com tecnologia 2 em 1. Perfeito para momentos especiais.'
    },
    {
        id: 'chave-thc',
        name: 'Chave THC - Chave de Carro',
        price: 474.00,
        image: 'CHAVE THC.png',
        stock: 4,
        description: 'Design ultra discreto que imita perfeitamente uma chave de carro. Máxima discrição garantida.'
    }
];

// Produtos de edição limitada
const limitedProducts = [
    {
        id: 'fufu-thc',
        name: 'Fufu THC - Personagem Kawaii',
        price: 599.99,
        image: 'FUFU THC.png',
        stock: 3,
        description: 'Design kawaii exclusivo com personagem fofo. Edição limitada para colecionadores.'
    },
    {
        id: 'raygan-thc',
        name: 'Raygan THC - Pistola de Raio',
        price: 599.99,
        image: 'RAYGAN THC.png',
        stock: 4,
        description: 'Design futurista inspirado em pistolas de raio. Tecnologia avançada em formato único.'
    },
    {
        id: 'robot-thc',
        name: 'Robot THC - Robô com Controle',
        price: 599.99,
        image: 'ROBO THC.png',
        stock: 2,
        description: 'Design robótico com controle remoto incluído. Perfeito para entusiastas de tecnologia.'
    }
];

// Produtos básicos
const basicProducts = [
    {
        id: 'canetao-thc',
        name: 'Canetão THC - Caneta Gigante',
        price: 399.99,
        image: 'CANETAO THC.png',
        stock: 8,
        description: 'Design escolar em formato de caneta gigante. Discreto e funcional para uso diário.'
    },
    {
        id: 'darksaber-thc',
        name: 'Darksaber THC - Sabre das Trevas',
        price: 399.99,
        image: 'DARSABER THC.png',
        stock: 6,
        description: 'Design inspirado em sabres de luz das trevas. Para fãs de ficção científica.'
    },
    {
        id: 'gucci-thc',
        name: 'Gucci THC - Estilo Luxo',
        price: 399.99,
        image: 'GUCCI THC.png',
        stock: 7,
        description: 'Design luxuoso inspirado em marcas premium. Elegância e sofisticação em um só produto.'
    },
    {
        id: 'lapis-thc',
        name: 'Lapíseira THC - Escolar',
        price: 399.99,
        image: 'LAPÍSEIRA THC.png',
        stock: 9,
        description: 'Design escolar perfeito para estudantes. Máxima discrição em ambiente acadêmico.'
    },
    {
        id: 'lipborn-thc',
        name: 'Lip Born THC - Batom',
        price: 399.99,
        image: 'LIP BORN THC.png',
        stock: 5,
        description: 'Design feminino em formato de batom. Elegante e discreto para uso social.'
    },
    {
        id: 'minibolsa-thc',
        name: 'Mini Bolsa THC - Bolsinha',
        price: 399.99,
        image: 'MINI BOLSA THC.png',
        stock: 4,
        description: 'Design em formato de mini bolsa. Charme e funcionalidade em tamanho compacto.'
    },
    {
        id: 'refil-thc',
        name: 'Refil THC - Caneta Comum',
        price: 399.99,
        image: 'REFIL THC.png',
        stock: 10,
        description: 'Design clássico de caneta comum. A opção mais discreta da nossa linha básica.'
    }
];

// Função removida - não há mais verificação de idade

// Função para carregar produtos
function loadProducts() {
    loadExclusiveProducts();
    loadLimitedProducts();
    loadBasicProducts();
}

function loadExclusiveProducts() {
    const container = document.getElementById('exclusiveProducts');
    container.innerHTML = '';
    
    exclusiveProducts.forEach(product => {
        const productCard = createProductCard(product, true, false, false);
        container.appendChild(productCard);
    });
}

function loadLimitedProducts() {
    const container = document.getElementById('limitedProducts');
    container.innerHTML = '';
    
    limitedProducts.forEach(product => {
        const productCard = createProductCard(product, false, true, false);
        container.appendChild(productCard);
    });
}

function loadBasicProducts() {
    const container = document.getElementById('basicProducts');
    container.innerHTML = '';
    
    basicProducts.forEach(product => {
        const productCard = createProductCard(product, false, false, true);
        container.appendChild(productCard);
    });
}

function createProductCard(product, isExclusive = false, isLimitedEdition = false, isBasic = false) {
    const div = document.createElement('div');
    
    // Badge de estoque
    const stockBadge = product.stock <= 3 ? 
        `<span class="bg-red-500 text-white px-3 py-2 rounded-full text-sm font-bold stock-urgent">⚠️ ÚLTIMAS ${product.stock}!</span>` :
        `<span class="bg-green-500 text-white px-3 py-2 rounded-full text-sm font-bold">${product.stock} disponíveis</span>`;
    
    // Badges especiais com animações
    let badge = '';
    let freightBadge = `<div class="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">🚚 FRETE GRÁTIS</div>`;
    
    if (isExclusive) {
        badge = `<div class="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg badge-shine">⭐ EXCLUSIVO ⭐</div>`;
    } else if (isLimitedEdition) {
        badge = `<div class="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg badge-shine">🔥 EDIÇÃO LIMITADA</div>`;
    } else if (isBasic) {
        badge = `<div class="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">💎 LINHA BÁSICA</div>`;
    }

    // Classes especiais para animações
    let cardClasses = 'bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden';
    if (isExclusive) {
        cardClasses += ' border-2 border-yellow-300 hover:border-orange-400';
    } else if (isLimitedEdition) {
        cardClasses += ' border-2 border-red-300 hover:border-pink-400';
    } else if (isBasic) {
        cardClasses += ' border-2 border-blue-300 hover:border-purple-400';
    }

    const description = getProductDescription(product.id);

    div.innerHTML = `
        <div class="${cardClasses}">
            <div class="relative">
                ${badge}
                ${freightBadge}
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
                <div class="absolute bottom-3 right-3">
                    ${stockBadge}
                </div>
            </div>
            <div class="p-6">
                <h3 class="logo-font text-xl font-bold text-gray-800 mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${description}</p>
                
                <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-3 text-lg">🌿 Escolha suas Strains</h4>
                    <div class="grid grid-cols-3 gap-2">
                        <div class="text-center">
                            <div class="bg-purple-100 p-3 rounded-lg">
                                <span class="text-2xl mb-2 block">🌙</span>
                                <p class="text-xs font-semibold text-purple-800 mb-2">Indica</p>
                                <div class="flex items-center justify-center gap-2">
                                    <button onclick="updateStrain('${product.id}', 'indica', -1)" class="bg-purple-500 text-white w-8 h-8 rounded-full text-lg font-bold hover:bg-purple-600">-</button>
                                    <span id="indica-${product.id}" class="font-bold text-lg min-w-[20px]">0</span>
                                    <button onclick="updateStrain('${product.id}', 'indica', 1)" class="bg-purple-500 text-white w-8 h-8 rounded-full text-lg font-bold hover:bg-purple-600">+</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <div class="bg-orange-100 p-3 rounded-lg">
                                <span class="text-2xl mb-2 block">☀️</span>
                                <p class="text-xs font-semibold text-orange-800 mb-2">Sativa</p>
                                <div class="flex items-center justify-center gap-2">
                                    <button onclick="updateStrain('${product.id}', 'sativa', -1)" class="bg-orange-500 text-white w-8 h-8 rounded-full text-lg font-bold hover:bg-orange-600">-</button>
                                    <span id="sativa-${product.id}" class="font-bold text-lg min-w-[20px]">0</span>
                                    <button onclick="updateStrain('${product.id}', 'sativa', 1)" class="bg-orange-500 text-white w-8 h-8 rounded-full text-lg font-bold hover:bg-orange-600">+</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <div class="bg-green-100 p-3 rounded-lg">
                                <span class="text-2xl mb-2 block">⚖️</span>
                                <p class="text-xs font-semibold text-green-800 mb-2">Híbrida</p>
                                <div class="flex items-center justify-center gap-2">
                                    <button onclick="updateStrain('${product.id}', 'hibrida', -1)" class="bg-green-500 text-white w-8 h-8 rounded-full text-lg font-bold hover:bg-green-600">-</button>
                                    <span id="hibrida-${product.id}" class="font-bold text-lg min-w-[20px]">0</span>
                                    <button onclick="updateStrain('${product.id}', 'hibrida', 1)" class="bg-green-500 text-white w-8 h-8 rounded-full text-lg font-bold hover:bg-green-600">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="strain-warning-${product.id}" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" style="display: none;">
                    ⚠️ Por favor, selecione pelo menos 1 strain antes de comprar!
                </div>
                
                <div class="space-y-2">
                    <button onclick="handleCheckout('${product.name}', 1, ${product.price}, '${product.id}')" 
                            class="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                        💳 1 UNIDADE - R$ ${product.price.toFixed(2).replace('.', ',')}
                    </button>
                    
                    <button onclick="handleCheckout('${product.name}', 3, ${(product.price * 0.82).toFixed(2)}, '${product.id}')" 
                            id="btn-3-${product.id}"
                            class="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 opacity-50 cursor-not-allowed" 
                            disabled>
                        🔥 3 UNIDADES - R$ ${(product.price * 0.82).toFixed(2).replace('.', ',')} cada <span class="bg-red-500 px-2 py-1 rounded text-xs ml-2">18% OFF</span>
                    </button>
                    
                    <button onclick="handleCheckout('${product.name}', 5, ${(product.price * 0.62).toFixed(2)}, '${product.id}')" 
                            id="btn-5-${product.id}"
                            class="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 rounded-lg font-bold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 opacity-50 cursor-not-allowed" 
                            disabled>
                        ⭐ 5 UNIDADES - R$ ${(product.price * 0.62).toFixed(2).replace('.', ',')} cada <span class="bg-red-500 px-2 py-1 rounded text-xs ml-2">38% OFF</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return div;
}

function getProductDescription(productId) {
    const descriptions = {
        'love-thc': 'Design exclusivo em formato de coração com tecnologia 2 em 1. Perfeito para momentos especiais e presentes únicos.',
        'chave-thc': 'Design ultra discreto que imita perfeitamente uma chave de carro. Máxima discrição garantida em qualquer situação.',
        'fufu-thc': 'Design kawaii exclusivo com personagem fofo. Edição limitada para colecionadores e amantes da cultura japonesa.',
        'raygan-thc': 'Design futurista inspirado em pistolas de raio. Tecnologia avançada em formato único e inovador.',
        'robot-thc': 'Design robótico com controle remoto incluído. Perfeito para entusiastas de tecnologia e ficção científica.',
        'canetao-thc': 'Design escolar em formato de caneta gigante. Discreto e funcional para uso diário em qualquer ambiente.',
        'darksaber-thc': 'Design inspirado em sabres de luz das trevas. Para fãs de ficção científica e universos galácticos.',
        'gucci-thc': 'Design luxuoso inspirado em marcas premium. Elegância e sofisticação em um só produto exclusivo.',
        'lapis-thc': 'Design escolar perfeito para estudantes. Máxima discrição em ambiente acadêmico e profissional.',
        'lipborn-thc': 'Design feminino em formato de batom. Elegante e discreto para uso social e profissional.',
        'minibolsa-thc': 'Design em formato de mini bolsa. Charme e funcionalidade em tamanho compacto e portátil.',
        'refil-thc': 'Design clássico de caneta comum. A opção mais discreta da nossa linha básica para uso cotidiano.'
    };
    
    return descriptions[productId] || 'Produto premium com design exclusivo e qualidade superior.';
}

function updateStrain(productId, strainType, change) {
    const element = document.getElementById(`${strainType}-${productId}`);
    let currentValue = parseInt(element.textContent);
    let newValue = Math.max(0, currentValue + change);
    
    element.textContent = newValue;
    
    // Atualizar botões baseado no total de strains
    updateButtons(productId);
}

function updateButtons(productId) {
    const indica = parseInt(document.getElementById(`indica-${productId}`).textContent);
    const sativa = parseInt(document.getElementById(`sativa-${productId}`).textContent);
    const hibrida = parseInt(document.getElementById(`hibrida-${productId}`).textContent);
    
    const total = indica + sativa + hibrida;
    
    const btn3 = document.getElementById(`btn-3-${productId}`);
    const btn5 = document.getElementById(`btn-5-${productId}`);
    
    // Botão de 3 unidades
    if (total >= 3) {
        btn3.disabled = false;
        btn3.classList.remove('opacity-50', 'cursor-not-allowed');
        btn3.classList.add('hover:from-blue-600', 'hover:to-blue-700');
    } else {
        btn3.disabled = true;
        btn3.classList.add('opacity-50', 'cursor-not-allowed');
        btn3.classList.remove('hover:from-blue-600', 'hover:to-blue-700');
    }
    
    // Botão de 5 unidades
    if (total >= 5) {
        btn5.disabled = false;
        btn5.classList.remove('opacity-50', 'cursor-not-allowed');
        btn5.classList.add('hover:from-purple-600', 'hover:to-purple-700');
    } else {
        btn5.disabled = true;
        btn5.classList.add('opacity-50', 'cursor-not-allowed');
        btn5.classList.remove('hover:from-purple-600', 'hover:to-purple-700');
    }
}

function getSelectedStrains(productId) {
    const indica = parseInt(document.getElementById(`indica-${productId}`).textContent);
    const sativa = parseInt(document.getElementById(`sativa-${productId}`).textContent);
    const hibrida = parseInt(document.getElementById(`hibrida-${productId}`).textContent);
    
    return { indica, sativa, hibrida, total: indica + sativa + hibrida };
}

function showStrainWarning(productId) {
    const warningElement = document.getElementById(`strain-warning-${productId}`);
    warningElement.style.display = 'block';
    warningElement.classList.add('animate-pulse');
    
    // Remover o aviso após 3 segundos
    setTimeout(() => {
        warningElement.style.display = 'none';
        warningElement.classList.remove('animate-pulse');
    }, 3000);
}

function handleCheckout(productName, quantity, price, productId) {
    const strains = getSelectedStrains(productId);
    
    // Para 1 unidade, verificar se tem pelo menos 1 strain
    if (quantity === 1 && strains.total === 0) {
        showStrainWarning(productId);
        return;
    }
    
    // Para múltiplas unidades, verificar se tem strains suficientes
    if (quantity > 1 && strains.total < quantity) {
        showStrainWarning(productId);
        return;
    }
    
    // Se chegou até aqui, pode abrir o checkout
    openCheckout(productName, quantity, price, productId);
}

// Função para abrir o checkout
function openCheckout(productName, quantity, price, productId) {
    // Coletar strains selecionadas
    const indica = parseInt(document.getElementById(`indica-${productId}`).textContent);
    const sativa = parseInt(document.getElementById(`sativa-${productId}`).textContent);
    const hibrida = parseInt(document.getElementById(`hibrida-${productId}`).textContent);
    
    const strains = [];
    if (indica > 0) strains.push(`Indica: ${indica}`);
    if (sativa > 0) strains.push(`Sativa: ${sativa}`);
    if (hibrida > 0) strains.push(`Híbrida: ${hibrida}`);
    
    const totalPrice = (price * quantity).toFixed(2);
    
    // Armazenar dados do checkout atual
    currentCheckout = {
        productName,
        quantity,
        price,
        totalPrice: parseFloat(totalPrice),
        strains: strains.join(', '),
        productId
    };
    
    // Atualizar resumo do pedido
    document.getElementById('orderSummary').innerHTML = `
        <div class="space-y-2">
            <div class="flex justify-between">
                <span class="font-semibold">Produto:</span>
                <span>${productName}</span>
            </div>
            <div class="flex justify-between">
                <span class="font-semibold">Quantidade:</span>
                <span>${quantity} unidade(s)</span>
            </div>
            <div class="flex justify-between">
                <span class="font-semibold">Strains:</span>
                <span>${strains.join(', ')}</span>
            </div>
            <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                <div class="flex justify-between items-center">
                    <span class="font-semibold text-green-800">🚚 FRETE GRÁTIS</span>
                    <span class="text-green-600 font-bold">R$ 0,00</span>
                </div>
            </div>
            <div class="flex justify-between text-xl font-bold text-green-600 border-t pt-2">
                <span>Total:</span>
                <span>R$ ${totalPrice.replace('.', ',')}</span>
            </div>
        </div>
    `;
    
    document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.add('hidden');
    // Limpar formulário
    document.getElementById('customerName').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerZip').value = '';
    
    // Limpar seleção de pagamento
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    paymentMethods.forEach(method => method.checked = false);
    document.getElementById('cardFields').classList.add('hidden');
}

function selectPayment(method) {
    // Marcar radio button
    document.querySelector(`input[value="${method}"]`).checked = true;
    
    // Mostrar/esconder campos do cartão
    if (method === 'card') {
        document.getElementById('cardFields').classList.remove('hidden');
    } else {
        document.getElementById('cardFields').classList.add('hidden');
    }
    
    // Atualizar visual dos métodos
    document.querySelectorAll('.payment-method').forEach(el => {
        el.classList.remove('border-blue-500', 'bg-blue-50');
        el.classList.add('border-gray-200');
    });
    
    event.currentTarget.classList.remove('border-gray-200');
    event.currentTarget.classList.add('border-blue-500', 'bg-blue-50');
}

async function processPayment() {
    // Validar campos obrigatórios
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    
    if (!name || !email || !phone) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    if (!paymentMethod) {
        alert('Por favor, selecione uma forma de pagamento.');
        return;
    }
    
    // Mostrar loading
    const submitBtn = document.querySelector('button[onclick="processPayment()"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '⏳ Processando...';
    submitBtn.disabled = true;
    
    try {
        if (paymentMethod.value === 'pix') {
            await processPixPayment(name, email, phone);
        } else if (paymentMethod.value === 'card') {
            await processCardPayment(name, email, phone);
        }
    } catch (error) {
        console.error('Erro no pagamento:', error);
        alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
        // Restaurar botão
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

async function processPixPayment(name, email, phone) {
    // Dados do pedido para WiinPay
    const orderData = {
        amount: currentCheckout.totalPrice,
        currency: 'BRL',
        customer: {
            name: name,
            email: email,
            phone: phone
        },
        items: [{
            name: currentCheckout.productName,
            quantity: currentCheckout.quantity,
            price: currentCheckout.price,
            description: `Strains: ${currentCheckout.strains}`
        }],
        payment_method: 'pix',
        callback_url: window.location.origin + '/callback',
        return_url: window.location.origin + '/success'
    };
    
    // Simular chamada para WiinPay API
    // Em produção, isso seria uma chamada real para sua API backend
    const response = await simulateWiinPayAPI(orderData);
    
    if (response.success) {
        showPixModal(response.pix_code, response.qr_code);
    } else {
        throw new Error('Falha ao gerar PIX');
    }
}

async function simulateWiinPayAPI(orderData) {
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simular resposta da WiinPay
    return {
        success: true,
        transaction_id: 'WP' + Date.now(),
        pix_code: generatePixCode(),
        qr_code: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
        amount: orderData.amount,
        expires_at: new Date(Date.now() + 30 * 60 * 1000).toISOString() // 30 minutos
    };
}

function generatePixCode() {
    // Gerar código PIX simulado
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 32; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function showPixModal(pixCode, qrCode) {
    const pixModal = `
        <div id="pixModal" class="pix-modal">
            <div class="pix-modal-content">
                <div class="mb-4">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">📱</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Pagamento via PIX</h3>
                    <p class="text-gray-600 text-sm mb-4">
                        Escaneie o QR Code ou copie o código PIX para finalizar seu pagamento
                    </p>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                    <div class="w-48 h-48 bg-white border-2 border-solid border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <canvas id="qrcode-canvas" class="max-w-full max-h-full"></canvas>
                    </div>
                    
                    <div class="text-left">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Código PIX:</label>
                        <div class="flex">
                            <input type="text" value="${pixCode}" readonly 
                                   class="flex-1 p-2 border border-gray-300 rounded-l-lg text-xs font-mono bg-gray-50">
                            <button onclick="copyPixKey('${pixCode}')" 
                                    class="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 text-sm">
                                📋 Copiar
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="bg-green-50 p-3 rounded-lg mb-4 text-left">
                    <h4 class="font-semibold text-green-800 mb-2">💰 Valor: R$ ${currentCheckout.totalPrice.toFixed(2).replace('.', ',')}</h4>
                    <p class="text-sm text-green-700">
                        ⏰ Este PIX expira em 30 minutos<br>
                        ✅ Após o pagamento, você receberá confirmação por email
                    </p>
                </div>
                
                <div class="flex gap-2">
                    <button onclick="closePixModal()" 
                            class="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                        Cancelar
                    </button>
                    <button onclick="checkPaymentStatus()" 
                            class="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                        ✅ Já Paguei
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', pixModal);
    
    // Gerar QR Code real após inserir o modal
    setTimeout(() => {
        const canvas = document.getElementById('qrcode-canvas');
        if (canvas && window.QRCode) {
            QRCode.toCanvas(canvas, pixCode, {
                width: 180,
                height: 180,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                }
            }, function (error) {
                if (error) {
                    console.error('Erro ao gerar QR Code:', error);
                    canvas.parentElement.innerHTML = '<span class="text-red-500 text-sm">Erro ao gerar QR Code</span>';
                }
            });
        } else {
            console.error('QRCode library não carregada ou canvas não encontrado');
        }
    }, 100);
}

function copyPixKey(pixKey) {
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('✅ Código PIX copiado! Cole no seu app do banco para pagar.');
    }).catch(() => {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = pixKey;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('✅ Código PIX copiado! Cole no seu app do banco para pagar.');
    });
}

function closePixModal() {
    const modal = document.getElementById('pixModal');
    if (modal) modal.remove();
    closeCheckout();
}

async function checkPaymentStatus() {
    const submitBtn = event.target;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '⏳ Verificando...';
    submitBtn.disabled = true;
    
    try {
        // Simular verificação de pagamento
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simular pagamento aprovado (em produção, verificaria status real na WiinPay)
        const isApproved = Math.random() > 0.3; // 70% de chance de aprovação
        
        if (isApproved) {
            showSuccessModal();
        } else {
            alert('⏳ Pagamento ainda não identificado. Aguarde alguns instantes e tente novamente.');
        }
    } catch (error) {
        alert('❌ Erro ao verificar pagamento. Tente novamente.');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

function showSuccessModal() {
    closePixModal();
    
    const successModal = `
        <div id="successModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 text-center">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-4xl">✅</span>
                </div>
                <h3 class="text-2xl font-bold text-green-800 mb-2">Pagamento Aprovado!</h3>
                <p class="text-gray-600 mb-4">
                    Seu pedido foi confirmado com sucesso. Você receberá um email com os detalhes da compra e informações de entrega.
                </p>
                
                <div class="bg-green-50 p-4 rounded-lg mb-4 text-left">
                    <h4 class="font-semibold text-green-800 mb-2">📦 Resumo do Pedido:</h4>
                    <p class="text-sm text-green-700">
                        <strong>Produto:</strong> ${currentCheckout.productName}<br>
                        <strong>Quantidade:</strong> ${currentCheckout.quantity} unidade(s)<br>
                        <strong>Strains:</strong> ${currentCheckout.strains}<br>
                        <strong>Total:</strong> R$ ${currentCheckout.totalPrice.toFixed(2).replace('.', ',')}
                    </p>
                </div>
                
                <button onclick="closeSuccessModal()" 
                        class="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-semibold">
                    🎉 Continuar Comprando
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', successModal);
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.remove();
}

// ========================================
// CONFIGURAÇÃO WIINPAY REAL
// ========================================

// CONFIGURAÇÃO WIINPAY// Configuração da WiinPay
const WIINPAY_CONFIG = {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdG9yLmV4cDAzM0BnbWFpbC5jb20iLCJpYXQiOjE3NTk4ODc5MDR9.2ZSV6jSkIx0BtYjWcWRdxC6GaNX2M4XJDwBuTch_h5g',
    baseUrl: 'https://api.wiinpay.com.br',
    environment: 'production'
};r pagamento PIX real
async function processRealPixPayment(orderData) {
    try {
        console.log('🔄 Processando pagamento PIX via WiinPay...', orderData);
        
        // Gerar PIX válido no padrão brasileiro
        const pixCode = generateValidPixCode(orderData.amount);
        
        const response = {
            success: true,
            pixCode: pixCode,
            qrCodeUrl: null, // Será gerado pelo QRCode.js
            paymentId: 'pix_cloudlab_' + Date.now(),
            expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString()
        };
        
        // Para implementação real, descomente e configure:
        /*
        const response = await fetch(`${WIINPAY_CONFIG.baseUrl}/v1/pix/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${WIINPAY_CONFIG.apiKey}`
            },
            body: JSON.stringify({
                amount: orderData.amount,
                description: orderData.description,
                customer: orderData.customer,
                expiration_minutes: 30
            })
        });
        
        const result = await response.json();
        return result;
        */
        
        console.log('✅ PIX gerado com sucesso:', response);
        return response;
    } catch (error) {
        console.error('❌ Erro WiinPay:', error);
        return { success: false, error: error.message };
    }
}

// Função para gerar código PIX válido no padrão brasileiro
function generateValidPixCode(amount) {
    const merchantName = "CLOUD LAB";
    const merchantCity = "SAO PAULO";
    const pixKey = "vitor.exp033@gmail.com"; // Sua chave PIX
    const txId = "CLOUDLAB" + Date.now().toString().slice(-8);
    
    // Construir payload PIX no formato EMV
    let payload = "";
    
    // Payload Format Indicator
    payload += "00020126";
    
    // Merchant Account Information
    payload += "26" + (pixKey.length + 22).toString().padStart(2, '0');
    payload += "0014BR.GOV.BCB.PIX";
    payload += "01" + pixKey.length.toString().padStart(2, '0') + pixKey;
    
    // Merchant Category Code
    payload += "52040000";
    
    // Transaction Currency (BRL)
    payload += "5303986";
    
    // Transaction Amount
    const amountStr = amount.toFixed(2);
    payload += "54" + amountStr.length.toString().padStart(2, '0') + amountStr;
    
    // Country Code
    payload += "5802BR";
    
    // Merchant Name
    payload += "59" + merchantName.length.toString().padStart(2, '0') + merchantName;
    
    // Merchant City
    payload += "60" + merchantCity.length.toString().padStart(2, '0') + merchantCity;
    
    // Additional Data Field Template
    const additionalData = "05" + txId.length.toString().padStart(2, '0') + txId;
    payload += "62" + additionalData.length.toString().padStart(2, '0') + additionalData;
    
    // CRC16
    payload += "6304";
    const crc = calculateCRC16(payload);
    payload += crc.toUpperCase();
    
    return payload;
}

// Função para calcular CRC16 (padrão PIX)
function calculateCRC16(data) {
    let crc = 0xFFFF;
    const polynomial = 0x1021;
    
    for (let i = 0; i < data.length; i++) {
        crc ^= (data.charCodeAt(i) << 8);
        
        for (let j = 0; j < 8; j++) {
            if (crc & 0x8000) {
                crc = (crc << 1) ^ polynomial;
            } else {
                crc <<= 1;
            }
            crc &= 0xFFFF;
        }
    }
    
    return crc.toString(16).padStart(4, '0');
}

// Função para verificar status do pagamento real
async function checkRealPaymentStatus(paymentId) {
    try {
        // Simular verificação real
        // SUBSTITUA por sua implementação real
        
        // Para implementação real, descomente:
        /*
        const response = await fetch(`${WIINPAY_CONFIG.baseUrl}/v1/payment/${paymentId}/status`, {
            headers: {
                'Authorization': `Bearer ${WIINPAY_CONFIG.apiKey}`
            }
        });
        
        const result = await response.json();
        return result;
        */
        
        // Mock para demonstração
        return {
            success: true,
            status: Math.random() > 0.7 ? 'paid' : 'pending',
            paidAt: new Date().toISOString()
        };
    } catch (error) {
        console.error('Erro verificação:', error);
        return { success: false, error: error.message };
    }
}

// Atualizar função processPayment para usar WiinPay real
const originalProcessPayment = processPayment;
processPayment = async function(paymentMethod) {
    const submitBtn = document.querySelector('#checkout-modal button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
        submitBtn.innerHTML = '⏳ Processando...';
        submitBtn.disabled = true;
        
        // Coletar dados do formulário
        const formData = {
            name: document.querySelector('input[placeholder="Nome completo"]').value,
            email: document.querySelector('input[placeholder="Email"]').value,
            phone: document.querySelector('input[placeholder="WhatsApp"]').value,
            cep: document.querySelector('input[placeholder="CEP"]').value
        };
        
        // Validar dados obrigatórios
        if (!formData.name || !formData.email || !formData.phone) {
            alert('❌ Preencha todos os campos obrigatórios');
            return;
        }
        
        const orderData = {
            amount: currentCheckout.totalPrice,
            description: `${currentCheckout.productName} - ${currentCheckout.quantity} unidade(s)`,
            customer: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            }
        };
        
        if (paymentMethod === 'pix') {
            // Processar PIX com WiinPay real
            const pixResult = await processRealPixPayment(orderData);
            
            if (pixResult.success) {
                showPixModal(pixResult.pixCode, pixResult.paymentId, currentCheckout.totalPrice);
            } else {
                alert('❌ Erro ao gerar PIX: ' + (pixResult.error || 'Tente novamente'));
            }
        } else {
            // Para cartão e boleto, implementar conforme necessário
            alert('🚧 Método de pagamento em desenvolvimento. Use PIX por enquanto.');
        }
        
    } catch (error) {
        console.error('Erro no pagamento:', error);
        alert('❌ Erro no processamento. Tente novamente.');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
};

// Função para abrir checkout de teste de R$ 1,00
function openTestCheckout() {
    // Configurar dados do produto de teste
    currentCheckout = {
        productName: 'Teste de Pagamento',
        quantity: 1,
        strains: 'Híbrida: 1',
        totalPrice: 1.00,
        originalPrice: 1.00
    };
    
    // Abrir modal de checkout
    const checkoutModal = `
        <div id="checkout-modal" class="checkout-modal">
            <div class="checkout-content">
                <div class="checkout-header">
                    <h3>🧪 Checkout de Teste - R$ 1,00</h3>
                    <button onclick="closeCheckout()" class="close-btn">&times;</button>
                </div>
                
                <div class="checkout-body">
                    <div class="order-summary">
                        <h4>📦 Resumo do Teste:</h4>
                        <div class="summary-item">
                            <span>Produto:</span>
                            <span>Teste de Pagamento</span>
                        </div>
                        <div class="summary-item">
                            <span>Quantidade:</span>
                            <span>1 unidade</span>
                        </div>
                        <div class="summary-item">
                            <span>Strain:</span>
                            <span>Híbrida: 1</span>
                        </div>
                        <div class="summary-item">
                            <span>Frete:</span>
                            <span class="text-green-600 font-bold">GRÁTIS</span>
                        </div>
                        <div class="summary-total">
                            <span>Total:</span>
                            <span>R$ 1,00</span>
                        </div>
                    </div>
                    
                    <form class="checkout-form">
                        <div class="form-group">
                            <label>Nome Completo *</label>
                            <input type="text" placeholder="Nome completo" required>
                        </div>
                        
                        <div class="form-group">
                            <label>Email *</label>
                            <input type="email" placeholder="Email" required>
                        </div>
                        
                        <div class="form-group">
                            <label>WhatsApp *</label>
                            <input type="tel" placeholder="WhatsApp" required>
                        </div>
                        
                        <div class="form-group">
                            <label>CEP (opcional)</label>
                            <input type="text" placeholder="CEP">
                        </div>
                        
                        <div class="payment-methods">
                            <h4>💳 Método de Pagamento:</h4>
                            <div class="payment-options">
                                <label class="payment-option">
                                    <input type="radio" name="payment" value="pix" checked>
                                    <span class="payment-label">
                                        🏦 PIX - Pagamento instantâneo
                                        <small>5% de desconto - R$ 0,95</small>
                                    </span>
                                </label>
                                
                                <label class="payment-option">
                                    <input type="radio" name="payment" value="card">
                                    <span class="payment-label">
                                        💳 Cartão de Crédito
                                        <small>Visa, Mastercard, Elo</small>
                                    </span>
                                </label>
                                
                                <label class="payment-option">
                                    <input type="radio" name="payment" value="boleto">
                                    <span class="payment-label">
                                        🏧 Boleto Bancário
                                        <small>Vencimento em 3 dias úteis</small>
                                    </span>
                                </label>
                            </div>
                        </div>
                        
                        <button type="submit" onclick="processTestPayment(event)" class="checkout-submit">
                            🚀 Finalizar Teste - R$ 1,00
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', checkoutModal);
}

// Função para processar pagamento de teste
async function processTestPayment(event) {
    event.preventDefault();
    
    const submitBtn = event.target;
    const originalText = submitBtn.innerHTML;
    
    try {
        submitBtn.innerHTML = '⏳ Processando teste...';
        submitBtn.disabled = true;
        
        // Coletar dados do formulário
        const formData = {
            name: document.querySelector('input[placeholder="Nome completo"]').value,
            email: document.querySelector('input[placeholder="Email"]').value,
            phone: document.querySelector('input[placeholder="WhatsApp"]').value
        };
        
        // Validar dados obrigatórios
        if (!formData.name || !formData.email || !formData.phone) {
            alert('❌ Preencha todos os campos obrigatórios');
            return;
        }
        
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        
        if (paymentMethod === 'pix') {
            // Processar PIX de teste
            const orderData = {
                amount: 1.00,
                description: 'Teste de Pagamento - Cloud Lab',
                customer: formData
            };
            
            const pixResult = await processRealPixPayment(orderData);
            
            if (pixResult.success) {
                showPixModal(pixResult.pixCode, pixResult.paymentId, 1.00);
            } else {
                alert('❌ Erro ao gerar PIX de teste: ' + (pixResult.error || 'Tente novamente'));
            }
        } else {
            alert('🧪 Para teste, use apenas PIX. Outros métodos em desenvolvimento.');
        }
        
    } catch (error) {
        console.error('Erro no teste:', error);
        alert('❌ Erro no teste. Tente novamente.');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Função para abrir checkout de teste
function openTestCheckout() {
    const testCheckoutHTML = `
        <div id="checkoutModal" class="checkout-modal">
            <div class="checkout-modal-content">
                <div class="checkout-header">
                    <h2>🧪 Checkout de Teste - R$ 1,00</h2>
                    <button onclick="closeCheckout()" class="close-btn">×</button>
                </div>
                
                <div class="checkout-body">
                    <div class="order-summary">
                        <h3>📋 Resumo do Teste</h3>
                        <div class="summary-item">
                            <span>Produto:</span>
                            <span>Teste de Pagamento</span>
                        </div>
                        <div class="summary-item">
                            <span>Quantidade:</span>
                            <span>1 unidade</span>
                        </div>
                        <div class="summary-item">
                            <span>Strain:</span>
                            <span>Híbrida: 1</span>
                        </div>
                        <div class="summary-item">
                            <span>Frete:</span>
                            <span class="free-shipping">GRÁTIS</span>
                        </div>
                        <div class="summary-total">
                            <span>Total:</span>
                            <span>R$ 1,00</span>
                        </div>
                    </div>
                    
                    <form class="checkout-form">
                        <div class="form-group">
                            <label>Nome Completo *</label>
                            <input type="text" name="name" placeholder="Nome completo" required>
                        </div>
                        
                        <div class="form-group">
                            <label>Email *</label>
                            <input type="email" name="email" placeholder="Email" required>
                        </div>
                        
                        <div class="form-group">
                            <label>WhatsApp *</label>
                            <input type="tel" name="phone" placeholder="WhatsApp" required>
                        </div>
                        
                        <div class="form-group">
                            <label>CEP (opcional)</label>
                            <input type="text" name="cep" placeholder="CEP">
                        </div>
                        
                        <div class="payment-methods">
                            <h3>💳 Método de Pagamento</h3>
                            <div class="payment-option">
                                <input type="radio" id="pix-test" name="payment" value="pix" checked>
                                <label for="pix-test">
                                    <span class="payment-label">
                                        🏦 PIX - Pagamento instantâneo
                                        <small>5% de desconto</small>
                                    </span>
                                </label>
                            </div>
                        </div>
                        
                        <button type="submit" onclick="processTestPayment(event)" class="checkout-submit">
                            🚀 Finalizar Teste - R$ 1,00
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', testCheckoutHTML);
}

// Função para processar pagamento de teste
async function processTestPayment(event) {
    event.preventDefault();
    
    const form = event.target.closest('form');
    const formData = new FormData(form);
    
    const orderData = {
        amount: 1.00,
        description: 'Teste de Pagamento Cloud Lab',
        customer: {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        }
    };
    
    // Validar dados
    if (!orderData.customer.name || !orderData.customer.email || !orderData.customer.phone) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Processar pagamento
    const submitBtn = event.target;
    submitBtn.textContent = '⏳ Processando...';
    submitBtn.disabled = true;
    
    try {
        const result = await processRealPixPayment(orderData);
        
        if (result.success) {
            closeCheckout();
            showPixModal(result.pixCode, result.qrCode);
        } else {
            alert('Erro ao processar pagamento: ' + result.error);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
        submitBtn.textContent = '🚀 Finalizar Teste - R$ 1,00';
        submitBtn.disabled = false;
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cloud Lab carregado com WiinPay integrado!');
    loadProducts(); // Carregar produtos diretamente
    
    // Mostrar aviso sobre configuração da API
    console.log('🔧 CONFIGURAÇÃO NECESSÁRIA:');
    console.log('1. Substitua SUA_CHAVE_API_AQUI pela sua chave real da WiinPay');
    console.log('2. Descomente as chamadas reais da API no código');
    console.log('3. Teste com pagamentos reais');
    console.log('🧪 BOTÃO DE TESTE: Use o botão "TESTE R$ 1,00" no canto superior direito');
});
