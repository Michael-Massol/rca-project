import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_health_check(client):
    """Vérifie que l'endpoint de santé répond correctement."""
    response = client.get('/health')
    assert response.status_code == 200
    assert response.json['status'] == 'ok'
