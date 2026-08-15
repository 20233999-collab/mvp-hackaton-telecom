import { createIcons } from 'lucide';

// Initialize Lucide icons
createIcons();

// --- METADATA REPOSITORY (The "Explainability Extracts" for the Pitch) ---
const jsonMetadata = {
  json1: {
    "TMF622_Order": {
      "status": "Submitted",
      "customer_id": "VAL8912",
      "plan": "Movistar Total",
      "monthly_fee": 139.90,
      "channel": "WhatsApp_Concierge",
      "uplift_score": 0.89,
      "intent": "Persuadable"
    }
  },
  json2: {
    "PxQ_Audit": {
      "status": "Auditing",
      "bss_price": 139.90,
      "oss_provisioning": 159.90,
      "discrepancy_detected": true,
      "delta": "+20.00",
      "root_cause": "Ghost Service: HBO Premium Active in Network but not in Contract",
      "ai_action": "Pause Billing, Trigger Network Deprovisioning"
    }
  },
  json3: {
    "OSS_Activation": {
      "status": "Success",
      "target_node": "GPON_LIM_SUR_02",
      "action": "Deprovision HBO Premium",
      "latency_ms": 420,
      "billing_adjusted": true,
      "final_invoice": 139.90
    }
  },
  json4: {
    "Bill_Shock_Prevention": {
      "status": "Intercepted",
      "proration_amount": 15.00,
      "action": "Generate CSR-RAG Explanation",
      "customer_sentiment_expected": "Relieved",
      "call_deflection_probability": "98%",
      "cross_sell_flag": "UNLOCKED"
    }
  }
};

// --- DOM ELEMENTS ---
const btnSimulate = document.getElementById('btnSimulate');
const jsonContainer = document.getElementById('jsonContainer');
const nodes = [
  document.getElementById('node1'),
  document.getElementById('node2'),
  document.getElementById('node3'),
  document.getElementById('node4')
];
const connectors = [
  document.getElementById('conn1'),
  document.getElementById('conn2'),
  document.getElementById('conn3')
];

let currentState = 0; // 0 = start, 1 = auditing, 2 = OSS, 3 = Contención

// Function to render JSON beautifully
function renderJSON(data) {
  jsonContainer.innerHTML = JSON.stringify(data, null, 2)
    // Add some simple syntax highlighting
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        
        // Inline styles for syntax highlighting
        let style = '';
        if (cls === 'key') style = 'color: #53BDEB;';
        if (cls === 'string') style = 'color: #008738;';
        if (cls === 'number') style = 'color: #E6007E;';
        if (cls === 'boolean') style = 'color: #F28C28;';

        return '<span style="' + style + '">' + match + '</span>';
    });
}

// Set initial JSON
renderJSON(jsonMetadata.json1);

// Handle node clicks to preview data
nodes.forEach(node => {
  node.addEventListener('click', () => {
    const target = node.getAttribute('data-target');
    renderJSON(jsonMetadata[target]);
  });
});

// SIMULATION ENGINE
function advanceSimulation() {
  if (currentState === 0) {
    // Move from 1 to 2
    nodes[0].classList.remove('active');
    nodes[0].classList.add('completed');
    
    // Animate connector
    connectors[0].querySelector('.connector-progress').style.width = '100%';
    
    setTimeout(() => {
      nodes[1].classList.add('processing');
      renderJSON(jsonMetadata.json2);
      currentState = 1;
    }, 800);

  } else if (currentState === 1) {
    // Move from 2 to 3
    nodes[1].classList.remove('processing');
    nodes[1].classList.add('completed');
    
    connectors[1].querySelector('.connector-progress').style.width = '100%';
    
    setTimeout(() => {
      nodes[2].classList.add('processing');
      renderJSON(jsonMetadata.json3);
      currentState = 2;
    }, 800);

  } else if (currentState === 2) {
    // Move from 3 to 4
    nodes[2].classList.remove('processing');
    nodes[2].classList.add('completed');
    
    connectors[2].querySelector('.connector-progress').style.width = '100%';
    
    setTimeout(() => {
      nodes[3].classList.add('active'); // active, not processing, as it's the final waiting state
      renderJSON(jsonMetadata.json4);
      currentState = 3;
      btnSimulate.innerHTML = 'Reiniciar Flujo <i data-lucide="rotate-ccw"></i>';
      createIcons();
    }, 800);
    
  } else if (currentState === 3) {
    // Reset
    nodes.forEach(n => {
      n.classList.remove('completed', 'processing', 'active');
    });
    connectors.forEach(c => {
      c.querySelector('.connector-progress').style.width = '0%';
    });
    
    nodes[0].classList.add('active');
    renderJSON(jsonMetadata.json1);
    currentState = 0;
    btnSimulate.innerHTML = 'Simular Flujo <i data-lucide="play"></i>';
    createIcons();
  }
}

// Bind Button & Keyboard
btnSimulate.addEventListener('click', advanceSimulation);

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.key === ' ' || e.keyCode === 32) {
    e.preventDefault();
    advanceSimulation();
  }
});
