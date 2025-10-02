import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Homepage
app.get('/', (c) => {
  return c.render(
    <div className="homepage">
      {/* Header with Logos */}
      <header className="header">
        <div className="logo-container">
          <img src="/bishop-logo.png" alt="Bishop García Diego High School" className="logo" />
          <div className="program-title">
            <h1>Emerging Leaders Advisory Program</h1>
            <p>Where Character Grows and Leaders Emerge</p>
          </div>
          <img src="/emerging-leaders-logo.png" alt="Emerging Leaders Advisory Program" className="logo" />
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/session-1">Session 1: Digital Engagement</a></li>
          <li><a href="/session-2">Session 2: ESSENCE of Adolescence</a></li>
          <li><a href="/session-3">Session 3: Four Quadrants</a></li>
          <li><a href="/session-4">Session 4: Zones of Regulation</a></li>
          <li><a href="/session-5">Session 5: 7 Types of Relationships</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <section className="hero">
          <h2>Program Overview</h2>
          <div className="mission">
            <h3>Mission</h3>
            <p>The Emerging Leaders Advisory Program prepares senior students to facilitate Christ-centered social-emotional learning (SEL) and leadership formation for mixed-grade advisory groups. Rooted in Catholic Social Teaching, affective neuroscience, and the CASEL Five Core Competencies, the program nurtures emotional intelligence, relational health, and servant-leadership.</p>
          </div>
        </section>

        <section className="integration">
          <h3>Catholic Integration</h3>
          <ul>
            <li>Aligns with Catholic Social Teaching themes</li>
            <li>Integrates faith formation with character development</li>
            <li>Supports WCEA accreditation criteria</li>
            <li>Emphasizes dignity of the human person</li>
          </ul>
        </section>

        <section className="casel-competencies">
          <h3>CASEL Five Core Competencies</h3>
          <div className="competency-grid">
            <div className="competency">
              <h4>Self-Awareness</h4>
              <p>Understanding emotions, strengths, and values</p>
            </div>
            <div className="competency">
              <h4>Self-Management</h4>
              <p>Regulating emotions and behaviors effectively</p>
            </div>
            <div className="competency">
              <h4>Social Awareness</h4>
              <p>Empathy and perspective-taking</p>
            </div>
            <div className="competency">
              <h4>Relationship Skills</h4>
              <p>Healthy communication and collaboration</p>
            </div>
            <div className="competency">
              <h4>Responsible Decision-Making</h4>
              <p>Ethical choices for community good</p>
            </div>
          </div>
        </section>

        <section className="implementation">
          <h2>Implementation Model</h2>
          
          <div className="implementation-grid">
            <div className="implementation-section">
              <h3>Leadership Cohort Selection</h3>
              <ul>
                <li>Two senior students per House</li>
                <li>Students that demonstrate Bishop's core values</li>
                <li>Strong communication and leadership potential</li>
                <li>Individual applications accepted</li>
              </ul>
            </div>
            
            <div className="implementation-section">
              <h3>Training Structure</h3>
              <ul>
                <li>Five comprehensive training sessions during Cardinal Time</li>
                <li>Begins at the beginning of school</li>
                <li>Hands-on facilitation practice</li>
                <li>Ongoing mentorship and support</li>
              </ul>
            </div>
            
            <div className="implementation-section">
              <h3>Delivery Format</h3>
              <ul>
                <li>Cardinal Time delivery - 30-minute sessions</li>
                <li>House Huddle groups of 8-14 students</li>
                <li>Mixed-grade composition for community building</li>
                <li>Near-peer mentorship model leveraging senior leadership</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="program-sequence">
          <h2>Program Sequence</h2>
          <div className="sequence-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Emerging Leader Training</h3>
                <p>5 comprehensive sessions</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Advisory Session Delivery</h3>
                <p>5 facilitated sessions</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Ceremony & Certificates</h3>
                <p>Recognition and celebration</p>
              </div>
            </div>
          </div>
        </section>

        <section className="session-overview">
          <h2>Training Sessions</h2>
          <div className="session-grid">
            <a href="/session-1" className="session-card">
              <h4>Session 1: Digital Engagement & Attention</h4>
              <p>Exploring Haidt's Anxious Generation research on screen time and attention</p>
              <span className="duration">30 minutes</span>
            </a>
            <a href="/session-2" className="session-card">
              <h4>Session 2: The ESSENCE of Adolescence</h4>
              <p>Understanding Siegel's developmental framework for teen growth</p>
              <span className="duration">30 minutes</span>
            </a>
            <a href="/session-3" className="session-card">
              <h4>Session 3: Four Quadrants</h4>
              <p>Understanding Dr. John Townsend's framework for relational nutrients</p>
              <span className="duration">30 minutes</span>
            </a>
            <a href="/session-4" className="session-card">
              <h4>Session 4: Zones of Emotional Regulation</h4>
              <p>Learning to recognize and manage emotional states using polyvagal theory</p>
              <span className="duration">30 minutes</span>
            </a>
            <a href="/session-5" className="session-card">
              <h4>Session 5: 7 Types of Relationships</h4>
              <p>Understanding relationship dynamics and building healthy connections</p>
              <span className="duration">30 minutes</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Bishop García Diego High School - Emerging Leaders Advisory Program</p>
        <p>Where Character Grows and Leaders Emerge</p>
      </footer>
    </div>
  )
})

// Session 1: Digital Engagement & Attention
app.get('/session-1', (c) => {
  return c.render(
    <div className="session-page">
      <nav className="breadcrumb">
        <a href="/">Home</a> {' > '} <span>Session 1: Digital Engagement & Attention</span>
      </nav>
      
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 1: Digital Engagement & Attention - Complete Facilitator Guide</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        @page {
            size: tabloid landscape;
            margin: 0.4in;
        }
        body {
            font-family: 'Inter', sans-serif;
            font-size: 10px;
            line-height: 1.3;
            margin: 0;
            padding: 0.4in;
            max-width: none;
            background: white;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
        }
        .container {
            width: 100%;
            max-width: none;
        }
        .header {
            background: #1e3a8a;
            color: white;
            padding: 15px;
            margin-bottom: 12px;
            text-align: center;
        }
        .header h1 {
            font-size: 22px;
            margin: 0 0 5px 0;
            color: white;
        }
        .header h2 {
            font-size: 16px;
            margin: 0 0 5px 0;
            color: #d97706;
        }
        .header p {
            font-size: 12px;
            margin: 0;
        }
        .logo-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .logo {
            height: 35px;
        }
        .time-badge {
            background: #d97706;
            color: white;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 9px;
            font-weight: bold;
            display: inline-block;
        }
        .section {
            background: white;
            border: 2px solid #1e3a8a;
            margin-bottom: 10px;
            page-break-inside: avoid;
        }
        .section-header {
            background: #1e3a8a;
            color: white;
            padding: 8px 12px;
            font-size: 14px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .section-content {
            padding: 12px;
        }
        .activity-box {
            background: #dbeafe;
            padding: 8px;
            margin: 8px 0;
            border-left: 3px solid #d97706;
        }
        .instruction-box {
            background: #fef3c7;
            padding: 8px;
            margin: 8px 0;
            border-radius: 4px;
        }
        .harms-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin: 10px 0;
        }
        .harm-box {
            padding: 8px;
            border-radius: 4px;
            border: 2px solid;
        }
        .harm-social {
            background: #dbeafe;
            border-color: #3b82f6;
        }
        .harm-sleep {
            background: #dcfce7;
            border-color: #22c55e;
        }
        .harm-attention {
            background: #fef3c7;
            border-color: #eab308;
        }
        .harm-addiction {
            background: #fee2e2;
            border-color: #ef4444;
        }
        .harm-title {
            font-weight: bold;
            font-size: 10px;
            margin-bottom: 3px;
        }
        .harm-desc {
            font-size: 9px;
            margin-bottom: 3px;
        }
        .harm-detail {
            font-size: 8px;
            line-height: 1.2;
        }
        .main-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        .full-width {
            grid-column: 1 / -1;
        }
        h3 {
            font-size: 12px;
            margin: 8px 0 6px 0;
            color: #1e3a8a;
        }
        h4 {
            font-size: 11px;
            margin: 6px 0 4px 0;
            color: #1e3a8a;
        }
        h5 {
            font-size: 10px;
            margin: 4px 0 3px 0;
            font-weight: bold;
        }
        ul, ol {
            margin: 4px 0;
            padding-left: 16px;
        }
        li {
            margin-bottom: 2px;
            font-size: 9px;
        }
        p {
            margin: 4px 0;
            font-size: 9px;
        }
        .question-item {
            display: flex;
            align-items: flex-start;
            margin: 4px 0;
        }
        .question-number {
            background: #d97706;
            color: white;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8px;
            font-weight: bold;
            margin-right: 6px;
            flex-shrink: 0;
        }
        .footer {
            background: #1e3a8a;
            color: white;
            padding: 8px;
            text-align: center;
            margin-top: 12px;
            font-size: 9px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo-container">
                <div style="font-size: 10px">EMERGING LEADERS ADVISORY PROGRAM</div>
                <div style="font-size: 10px">BISHOP GARCÍA DIEGO HIGH SCHOOL</div>
            </div>
            <h1>Session 1: Digital Engagement & Attention</h1>
            <h2>(Haidt's Anxious Generation)</h2>
            <p><span style="color: rgb(255, 255, 255);">Where Character Grows and Leaders Emerge</span></p>
            <div style="margin-top: 8px">
                <span class="time-badge"><i class="fas fa-clock"></i> 30 Minutes Total</span>
            </div>
        </div>

        <div class="main-content">
            <!-- Welcome + Check-in Section -->
            <div class="section">
                <div class="section-header">
                    <span><i class="fas fa-mobile-alt"></i> WELCOME + CHECK-IN</span>
                    <span class="time-badge">4 Minutes</span>
                </div>
                <div class="section-content">
                    <h3>Activity: Floor Check - Screen Time Activity</h3>
                    <div class="activity-box">
                        <h5>Instructions for Facilitators:</h5>
                        <ol>
                            <li>Ask students to check daily average screen time (Settings > Screen Time on iPhone, Settings > Digital Wellbeing on Android)</li>
                            <li>Create number line on floor marking hours (0-12+)</li>
                            <li>Students stand on their daily average screen time</li>
                            <li>Observe distribution without judgment</li>
                            <li>3-4 students share top two apps and time spent</li>
                        </ol>
                    </div>
                    <div class="instruction-box">
                        <h5>Purpose & Expected Outcomes:</h5>
                        <ul>
                            <li>Create awareness of digital habits without shame</li>
                            <li>Normalize honest conversation about screen time</li>
                            <li>Set stage for discussing technology impact on wellbeing</li>
                            <li>Introduce data-driven self-reflection</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Mini-Teach Section -->
            <div class="section">
                <div class="section-header">
                    <span><i class="fas fa-brain"></i> MINI-TEACH</span>
                    <span class="time-badge">8 Minutes</span>
                </div>
                <div class="section-content">
                    <h3>Jonathan Haidt's Major Findings</h3>
                    <div style="background: #f3f4f6; padding: 8px; margin: 6px 0; font-size: 9px">
                        <strong>Social psychologist Jonathan Haidt's research reveals that when adolescents' social lives moved onto smartphones and social media platforms around 2012, anxiety and depression surged dramatically among young people. His book "The Anxious Generation" demonstrates how the shift from play-based childhood to phone-based childhood has rewired young brains during their most sensitive developmental period.</strong>
                    </div>
                    <h4>The Four Harms of Screen-Based Childhood</h4>
                    <div class="harms-grid">
                        <div class="harm-box harm-social">
                            <div class="harm-title"><i class="fas fa-users-slash"></i> SOCIAL DEPRIVATION</div>
                            <div class="harm-desc">Loss of face-to-face play and interaction with peers.</div>
                            <div class="harm-detail">
                                Teens need physical, synchronous play with peers for healthy development. Screen time replaces essential face-to-face interaction, leading to isolation.
                            </div>
                        </div>
                        <div class="harm-box harm-sleep">
                            <div class="harm-title"><i class="fas fa-bed"></i> SLEEP DEPRIVATION</div>
                            <div class="harm-desc">Disrupted sleep patterns from screen use before bed.</div>
                            <div class="harm-detail">
                                Blue light and engaging content disrupts natural sleep cycles. Teens need 8+ hours for healthy brain development and emotional regulation.
                            </div>
                        </div>
                        <div class="harm-box harm-attention">
                            <div class="harm-title"><i class="fas fa-bolt"></i> ATTENTION FRAGMENTATION</div>
                            <div class="harm-desc">Inability to focus on single tasks for extended periods.</div>
                            <div class="harm-detail">
                                Constant notifications impair deep concentration. Meaningful learning requires sustained attention, disrupted by devices.
                            </div>
                        </div>
                        <div class="harm-box harm-addiction">
                            <div class="harm-title"><i class="fas fa-sync"></i> ADDICTION</div>
                            <div class="harm-desc">Exploiting brain's dopamine system for engagement.</div>
                            <div class="harm-detail">
                                Social media and games trigger dopamine release, creating dependency. Heavy users report nothing feels good when not engaged with screens.
                            </div>
                        </div>
                    </div>
                    <div class="activity-box">
                        <h5>Four Harms Movement Activity:</h5>
                        <ol>
                            <li>Post four harms in room corners</li>
                            <li>Explain each harm briefly</li>
                            <li>Ask guiding questions, students move to chosen harm</li>
                            <li>2-3 students from each area share reasoning</li>
                            <li>Facilitate brief discussion about patterns</li>
                        </ol>
                    </div>
                    <div class="instruction-box">
                        <h5>Guiding Questions:</h5>
                        <div class="question-item">
                            <span class="question-number">1</span>
                            <span><strong>Which harm impacts you most?</strong></span>
                        </div>
                        <div class="question-item">
                            <span class="question-number">2</span>
                            <span><strong>Which harm impacts you least?</strong></span>
                        </div>
                        <div class="question-item">
                            <span class="question-number">3</span>
                            <span><strong>Which harm impacts your friends most?</strong></span>
                        </div>
                        <div class="question-item">
                            <span class="question-number">4</span>
                            <span><strong>Which harm impacts BDHS student body most?</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Activity Section (Full Width) -->
        <div class="section full-width">
            <div class="section-header">
                <span><i class="fas fa-spa"></i> ACTIVITY: SOUND BATH</span>
                <span class="time-badge">15 Minutes</span>
            </div>
            <div class="section-content">
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px">
                    <div class="activity-box">
                        <h5><i class="fas fa-list-check"></i> Materials Needed:</h5>
                        <ul>
                            <li>Device to play YouTube video with good audio quality</li>
                            <li><strong>Meditation Video:</strong> "Daily Calm | 10 Minute Mindfulness Meditation | Forgetting Time" by Calm</li>
                            <li><strong>Video URL:</strong> https://www.youtube.com/watch?v=YF_P1ZzYgjA&t=2s</li>
                            <li>Space for students to lie down or sit comfortably</li>
                            <li>Optional: yoga mats, cushions, or blankets</li>
                        </ul>
                    </div>
                    <div class="instruction-box">
                        <h5><i class="fas fa-play"></i> About the Meditation:</h5>
                        <p><strong>Guide:</strong> Tamara Levitt from Calm app</p>
                        <p><strong>Duration:</strong> 10 minutes, 23 seconds</p>
                        <p><strong>Focus:</strong> Mindfulness meditation exploring "forgetting time" - perfect for addressing attention fragmentation</p>
                        <p><strong>Theme:</strong> The meditation guides students to let go of time pressure and practice sustained attention on breathing, directly countering digital habits that fragment focus</p>
                    </div>
                    <div style="background: #f3f4f6; padding: 8px">
                        <h5><i class="fas fa-instructions"></i> Activity Instructions:</h5>
                        <ol>
                            <li><strong>Setup:</strong> Students find comfortable position</li>
                            <li><strong>Technology Note:</strong> "We're using technology mindfully here"</li>
                            <li><strong>Instructions:</strong> "Follow Tamara's guidance, notice mind wandering"</li>
                            <li><strong>Begin:</strong> Start YouTube video and participate</li>
                            <li><strong>Facilitator Role:</strong> Model mindful attention, avoid verbal interruptions</li>
                            <li><strong>Closing:</strong> Allow 30 seconds silence after video ends</li>
                        </ol>
                    </div>
                </div>
                <div class="activity-box" style="margin-top: 8px">
                    <h5><i class="fas fa-lightbulb"></i> Learning Connection:</h5>
                    <p>This meditation directly addresses <strong>attention fragmentation</strong> by practicing sustained focus on breath and letting go of time pressure. The guided meditation specifically explores "forgetting time" - the opposite of our hyper-connected, always-checking digital habits. Students will likely notice how difficult it is to maintain attention for 10+ minutes, illustrating how constant digital stimulation has trained their brains to expect frequent novelty and struggle with sustained concentration.</p>
                </div>
            </div>
        </div>

        <!-- Debrief Section -->
        <div class="section full-width">
            <div class="section-header">
                <span><i class="fas fa-comments"></i> DEBRIEF</span>
                <span class="time-badge">3 Minutes</span>
            </div>
            <div class="section-content">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
                    <div class="activity-box">
                        <h5>Post-Meditation Sharing (2 minutes):</h5>
                        <p><strong>Ask 3-4 students to share:</strong></p>
                        <ul>
                            <li>How did it feel to focus on one thing for 10+ minutes?</li>
                            <li>Did you notice your mind wandering? How often?</li>
                            <li>What was challenging about "forgetting time"?</li>
                        </ul>
                    </div>
                    <div class="instruction-box">
                        <h5>Final Reflection Questions (1 minute):</h5>
                        <div class="question-item">
                            <span class="question-number">1</span>
                            <div>
                                <p><strong>Are you satisfied with your digital habits?</strong></p>
                                <p style="font-size: 8px">Consider screen time, app usage, and how technology affects sleep, attention, and relationships.</p>
                            </div>
                        </div>
                        <div class="question-item">
                            <span class="question-number">2</span>
                            <div>
                                <p><strong>Identify one desired change to your digital habits.</strong></p>
                                <p style="font-size: 8px">What specific, realistic change could you make this week to address one of the four harms?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p><strong><span style="color: rgb(255, 255, 255);">Bishop García Diego High School - Emerging Leaders Advisory Program</span></strong></p>
            <p><span style="color: rgb(255, 255, 255);">Based on Dr. Jonathan Haidt's "The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness"</span></p>
        </div>
    </div>
</body>
</html>
        `
      }} />
    </div>
  )
})

// Session 2: The ESSENCE of Adolescence
app.get('/session-2', (c) => {
  return c.render(
    <div className="session-page">
      <nav className="breadcrumb">
        <a href="/">Home</a> {' > '} <span>Session 2: The ESSENCE of Adolescence</span>
      </nav>
      
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 2: The ESSENCE of Adolescence - Complete Facilitator Guide</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        @page {
            size: 11in 17in;
            margin: 0.5in;
        }
        body {
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            line-height: 1.4;
            margin: 0;
            padding: 0.5in;
            max-width: none;
            background: white;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
        }
        .container {
            width: 100%;
            max-width: none;
        }
        .header {
            background: #1e3a8a;
            color: white;
            padding: 15px;
            margin-bottom: 15px;
            text-align: center;
        }
        .header h1 {
            font-size: 24px;
            margin: 0 0 8px 0;
            color: white;
        }
        .header h2 {
            font-size: 18px;
            margin: 0 0 8px 0;
            color: #d97706;
        }
        .header p {
            font-size: 14px;
            margin: 0;
        }
        .logo-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .time-badge {
            background: #d97706;
            color: white;
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 10px;
            font-weight: bold;
            display: inline-block;
        }
        .section {
            background: white;
            border: 2px solid #1e3a8a;
            margin-bottom: 12px;
            page-break-inside: avoid;
        }
        .section-header {
            background: #1e3a8a;
            color: white;
            padding: 10px 15px;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .section-content {
            padding: 15px;
        }
        .activity-box {
            background: #dbeafe;
            padding: 12px;
            margin: 10px 0;
            border-left: 4px solid #d97706;
        }
        .instruction-box {
            background: #fef3c7;
            padding: 12px;
            margin: 10px 0;
            border-radius: 6px;
        }
        .essence-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin: 12px 0;
        }
        .essence-box {
            padding: 10px;
            border-radius: 6px;
            border: 2px solid;
        }
        .essence-es {
            background: #dbeafe;
            border-color: #3b82f6;
        }
        .essence-se {
            background: #dcfce7;
            border-color: #22c55e;
        }
        .essence-n {
            background: #fef3c7;
            border-color: #eab308;
        }
        .essence-ce {
            background: #fee2e2;
            border-color: #ef4444;
        }
        .essence-title {
            font-weight: bold;
            font-size: 11px;
            margin-bottom: 4px;
        }
        .essence-desc {
            font-size: 11px;
            margin-bottom: 4px;
        }
        .essence-detail {
            font-size: 10px;
            line-height: 1.3;
        }
        .main-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .full-width {
            width: 100%;
        }
        .activity-section {
            grid-column: 1 / -1;
        }
        h3 {
            font-size: 14px;
            margin: 10px 0 8px 0;
            color: #1e3a8a;
        }
        h4 {
            font-size: 13px;
            margin: 8px 0 6px 0;
            color: #1e3a8a;
        }
        h5 {
            font-size: 11px;
            margin: 6px 0 4px 0;
            font-weight: bold;
        }
        ul, ol {
            margin: 6px 0;
            padding-left: 20px;
        }
        li {
            margin-bottom: 3px;
            font-size: 11px;
        }
        p {
            margin: 6px 0;
            font-size: 11px;
        }
        .question-item {
            display: flex;
            align-items: flex-start;
            margin: 6px 0;
        }
        .question-number {
            background: #d97706;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: bold;
            margin-right: 8px;
            flex-shrink: 0;
        }
        .footer {
            background: #1e3a8a;
            color: white;
            padding: 12px;
            text-align: center;
            margin-top: 20px;
            font-size: 11px;
            grid-column: 1 / -1;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo-container">
                <div style="font-size: 12px">EMERGING LEADERS ADVISORY PROGRAM</div>
                <div style="font-size: 12px">BISHOP GARCÍA DIEGO HIGH SCHOOL</div>
            </div>
            <h1>Session 2: The ESSENCE of Adolescence</h1>
            <h2>(Siegel's Developmental Framework)</h2>
            <p><span style="color: rgb(255, 255, 255);">Where Character Grows and Leaders Emerge</span></p>
            <div style="margin-top: 10px">
                <span class="time-badge"><i class="fas fa-clock"></i> 30 Minutes Total</span>
            </div>
        </div>

        <div class="main-content">
            <!-- Welcome + Check-in Section -->
            <div class="section">
                <div class="section-header">
                    <span><i class="fas fa-hand-point-up"></i> WELCOME + CHECK-IN</span>
                    <span class="time-badge">4 Minutes</span>
                </div>
                <div class="section-content">
                    <h3>Activity: Finger-Switching Coordination Challenge</h3>
                    <div class="activity-box">
                        <h5>Instructions for Facilitators:</h5>
                        <ol>
                            <li>Have students stand up and prepare for a coordination challenge</li>
                            <li>Demonstrate the activity: Alternate between pointing with one hand and giving a thumbs up with the other hand</li>
                            <li>Have students switch which hand points and which gives thumbs up as quickly as possible</li>
                            <li>Challenge: See who can do the coordination switch fastest without making mistakes</li>
                            <li>After the challenge, ask students to share highs and lows of their week</li>
                        </ol>
                    </div>
                    <div class="instruction-box">
                        <h5>Purpose & Expected Outcomes:</h5>
                        <ul>
                            <li>Demonstrate brain coordination and complexity in a fun, engaging way</li>
                            <li>Create energy and focus through physical movement</li>
                            <li>Introduce the concept of brain development and neural coordination</li>
                            <li>Provide emotional check-in opportunity through highs and lows sharing</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Mini-Teach Section -->
            <div class="section">
                <div class="section-header">
                    <span><i class="fas fa-brain"></i> MINI-TEACH</span>
                    <span class="time-badge">8 Minutes</span>
                </div>
                <div class="section-content">
                    <h3>Daniel Siegel's ESSENCE Framework</h3>
                    <div style="background: #f3f4f6; padding: 12px; margin: 8px 0; font-size: 11px; border-radius: 6px">
                        <strong>Neuroscientist Dr. Daniel Siegel discovered that adolescence has an "ESSENCE" - four powerful developmental strengths that emerge during the teenage years. Rather than seeing adolescence as a problem to endure, Siegel shows how these characteristics are actually superpowers that help teens develop into innovative, passionate, and connected adults. These same qualities also keep adult brains healthy throughout life.</strong>
                    </div>
                    <h4>The Four Developmental Tasks of ESSENCE</h4>
                    <div class="essence-grid">
                        <div class="essence-box essence-es">
                            <div class="essence-title"><i class="fas fa-fire"></i> EMOTIONAL SPARK (ES)</div>
                            <div class="essence-desc">Enhanced emotional intensity and passion for living fully.</div>
                            <div class="essence-detail">
                                Emotions become more powerful and influential during adolescence. While this can lead to moodiness, it also creates a passionate drive to live life fully and capture the excitement of being truly alive.
                            </div>
                        </div>
                        <div class="essence-box essence-se">
                            <div class="essence-title"><i class="fas fa-users"></i> SOCIAL ENGAGEMENT (SE)</div>
                            <div class="essence-desc">Turn toward peers and deep relationship-building.</div>
                            <div class="essence-detail">
                                Teens naturally shift focus from parents to peers, developing crucial social skills. While peer pressure can be negative, this drive creates the foundation for lifelong supportive relationships that promote health and happiness.
                            </div>
                        </div>
                        <div class="essence-box essence-n">
                            <div class="essence-title"><i class="fas fa-compass"></i> NOVELTY-SEEKING (N)</div>
                            <div class="essence-desc">Courage to explore the unfamiliar and unknown.</div>
                            <div class="essence-detail">
                                Brain changes create a drive to seek new experiences and take risks. While this can lead to dangerous behavior, it also provides the courage needed to leave home and explore the wider world independently.
                            </div>
                        </div>
                        <div class="essence-box essence-ce">
                            <div class="essence-title"><i class="fas fa-lightbulb"></i> CREATIVE EXPLORATION (CE)</div>
                            <div class="essence-desc">Push against status quo and innovate new solutions.</div>
                            <div class="essence-detail">
                                Adolescents naturally question "how things are" and imagine "how things could be." This can be disorienting, but it's also the source of most innovations in art, music, science, and technology throughout history.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Activity Section (Full Width) -->
        <div class="section activity-section">
            <div class="section-header">
                <span><i class="fas fa-eye"></i> ACTIVITY: HEADS UP/HEADS DOWN</span>
                <span class="time-badge">15 Minutes</span>
            </div>
            <div class="section-content">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px">
                    <div class="activity-box">
                        <h5><i class="fas fa-gamepad"></i> Game Instructions:</h5>
                        <ol>
                            <li><strong>Setup:</strong> All students get into a circle</li>
                            <li><strong>The Game:</strong> The facilitator counts to three and each person must look at the face of another person in the group</li>
                            <li><strong>Eye Contact Rule:</strong> When two students make eye contact, they are both "out" and must sit down together as a pair</li>
                            <li><strong>Goal:</strong> Students try to avoid making eye contact and win</li>
                            <li><strong>Continue:</strong> Repeat rounds until there's a winner or two declared</li>
                        </ol>
                    </div>
                    <div class="instruction-box">
                        <h5><i class="fas fa-film"></i> Movie Discussion:</h5>
                        <p>When pairs are eliminated, they discuss teen movies that show one or more of the four developmental tasks: Emotional Intensity, Social Relationships, Risk-Taking, or Creative Expression.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Debrief Section -->
        <div class="section activity-section">
            <div class="section-header">
                <span><i class="fas fa-comments"></i> DEBRIEF</span>
                <span class="time-badge">3 Minutes</span>
            </div>
            <div class="section-content">
                <div class="activity-box">
                    <h5>Creative Exploration Focus:</h5>
                    <div class="question-item">
                        <span class="question-number">1</span>
                        <div>
                            <p><strong>What is your creative-exploration outlet?</strong></p>
                            <p style="font-size: 9px">Think about how you currently express creativity - through art, music, writing, sports, problem-solving, or other innovative activities.</p>
                        </div>
                    </div>
                    <div class="question-item">
                        <span class="question-number">2</span>
                        <div>
                            <p><strong>Name one new "creative outlet" you wish to develop in the future.</strong></p>
                            <p style="font-size: 9px">What creative exploration would you like to try? How could you tap into your natural adolescent drive for innovation and creativity?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p><strong><span style="color: rgb(255, 255, 255);">Bishop García Diego High School - Emerging Leaders Advisory Program</span></strong></p>
            <p><span style="color: rgb(255, 255, 255);">Based on Dr. Daniel Siegel's "Brainstorm: The Power and Purpose of the Teenage Brain"</span></p>
        </div>
    </div>
</body>
</html>
        `
      }} />
    </div>
  )
})

// Session 3: Four Quadrants
app.get('/session-3', (c) => {
  return c.render(
    <div className="session-page">
      <nav className="breadcrumb">
        <a href="/">Home</a> {' > '} <span>Session 3: Four Quadrants</span>
      </nav>
      
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 3: Four Quadrants - Complete Facilitator Guide</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
      @page {
        size: 11in 17in;
        margin: 0.5in;
      }

      body {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        line-height: 1.4;
        margin: 0;
        padding: 0.5in;
        max-width: none;
        background: white;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }

      .container {
        width: 100%;
        max-width: none;
      }

      .header {
        background: #1e3a8a;
        color: white;
        padding: 20px;
        margin-bottom: 16px;
        text-align: center;
      }

      .header h1 {
        font-size: 28px;
        margin: 0 0 8px 0;
        color: white;
      }

      .header h2 {
        font-size: 20px;
        margin: 0 0 8px 0;
        color: #d97706;
      }

      .header p {
        font-size: 14px;
        margin: 0;
      }

      .logo-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
      }

      .logo {
        height: 45px;
      }

      .time-badge {
        background: #d97706;
        color: white;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 11px;
        font-weight: bold;
        display: inline-block;
      }

      .section {
        background: white;
        border: 2px solid #1e3a8a;
        margin-bottom: 14px;
        page-break-inside: avoid;
      }

      .section-header {
        background: #1e3a8a;
        color: white;
        padding: 12px 16px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .section-content {
        padding: 16px;
      }

      .activity-box {
        background: #dbeafe;
        padding: 12px;
        margin: 12px 0;
        border-left: 4px solid #d97706;
      }

      .instruction-box {
        background: #fef3c7;
        padding: 12px;
        margin: 12px 0;
        border-radius: 6px;
      }

      .quadrants-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin: 15px 0;
      }

      .quadrant-box {
        padding: 12px;
        border-radius: 6px;
        border: 2px solid;
      }

      .quadrant-1 {
        background: #dbeafe;
        border-color: #3b82f6;
      }

      .quadrant-2 {
        background: #dcfce7;
        border-color: #22c55e;
      }

      .quadrant-3 {
        background: #fef3c7;
        border-color: #eab308;
      }

      .quadrant-4 {
        background: #fee2e2;
        border-color: #ef4444;
      }

      .quadrant-title {
        font-weight: bold;
        font-size: 12px;
        margin-bottom: 5px;
      }

      .quadrant-desc {
        font-size: 11px;
        margin-bottom: 5px;
      }

      .quadrant-detail {
        font-size: 10px;
        line-height: 1.3;
      }

      .main-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      .full-width {
        grid-column: 1 / -1;
      }

      h3 {
        font-size: 14px;
        margin: 12px 0 8px 0;
        color: #1e3a8a;
      }

      h4 {
        font-size: 13px;
        margin: 10px 0 6px 0;
        color: #1e3a8a;
      }

      h5 {
        font-size: 12px;
        margin: 8px 0 4px 0;
        font-weight: bold;
      }

      ul,
      ol {
        margin: 6px 0;
        padding-left: 20px;
      }

      li {
        margin-bottom: 3px;
        font-size: 11px;
      }

      p {
        margin: 6px 0;
        font-size: 11px;
      }

      .question-item {
        display: flex;
        align-items: flex-start;
        margin: 6px 0;
      }

      .question-number {
        background: #d97706;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
        margin-right: 8px;
        flex-shrink: 0;
      }

      .footer {
        background: #1e3a8a;
        color: white;
        padding: 12px;
        text-align: center;
        margin-top: 16px;
        font-size: 11px;
      }

      @media print {
        body {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }

        .section,
        .activity-box,
        .instruction-box,
        .quadrant-box {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }

      /* Mobile Responsive Styles */
      @media (max-width: 768px) {
        .quadrants-grid {
          grid-template-columns: 1fr !important;
        }
        
        /* Override all inline grid styles to single column on mobile */
        div[style*="grid-template-columns: 1fr 1fr 1fr"] {
          grid-template-columns: 1fr !important;
        }
        
        div[style*="grid-template-columns: 1fr 1fr"] {
          grid-template-columns: 1fr !important;
        }
        
        /* Increase padding and margins for better mobile readability */
        .activity-box,
        .instruction-box {
          margin: 8px 0;
          padding: 16px;
        }
        
        .section-content {
          padding: 12px;
        }
        
        /* Adjust font sizes for mobile */
        h5 {
          font-size: 13px;
          margin-bottom: 8px;
        }
        
        p {
          font-size: 12px;
          line-height: 1.5;
        }
        
        /* Make time badges more prominent on mobile */
        .time-badge {
          font-size: 12px;
          padding: 6px 14px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <div class="logo-container">
          <div style="font-size: 10px">EMERGING LEADERS ADVISORY PROGRAM</div>
          <div style="font-size: 10px">BISHOP GARCÍA DIEGO HIGH SCHOOL</div>
        </div>
        <h1>Session 3: Four Quadrants</h1>
        <h2>(Townsend Quadrants)</h2>
        <p><span style="color: rgb(255, 255, 255)">Where Character Grows and Leaders Emerge</span></p>
        <div style="margin-top: 8px">
          <span class="time-badge"><i class="fas fa-clock"></i> 30 Minutes Total</span>
        </div>
      </div>

      <div class="main-content">
        <!-- Welcome + Check-in Section -->
        <div class="section">
          <div class="section-header">
            <span><i class="fas fa-handshake"></i> WELCOME + CHECK-IN</span>
            <span class="time-badge">6 Minutes</span>
          </div>
          <div class="section-content">
            <h3>Activity: The Human Knot</h3>

            <div class="activity-box">
              <h5>Instructions for Facilitators:</h5>
              <ol>
                <li>Have all participants stand in a circle (8-12 people works best)</li>
                <li>
                  Each person reaches across the circle with their right hand to grab someone else's right hand (not the
                  person next to them)
                </li>
                <li>Then each person reaches across with their left hand to grab a different person's left hand</li>
                <li>
                  Without letting go of hands, the group must work together to untangle themselves back into a circle
                </li>
                <li>Encourage communication and problem-solving as they work</li>
              </ol>
            </div>

            <div class="instruction-box">
              <h5>Purpose & Expected Outcomes:</h5>
              <ul>
                <li>Break the ice and create energy in the group</li>
                <li>Demonstrate the importance of communication and cooperation</li>
                <li>Set the stage for discussing how we connect with and support each other</li>
                <li>Introduction to the theme of relational needs and interdependence</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Mini-Teach Section -->
        <div class="section">
          <div class="section-header">
            <span><i class="fas fa-chalkboard-teacher"></i> MINI-TEACH</span>
            <span class="time-badge">8 Minutes</span>
          </div>
          <div class="section-content">
            <h3>Dr. John Townsend's Four Quadrants</h3>

            <div style="background: #f3f4f6; padding: 12px; margin: 8px 0; font-size: 11px">
              <strong>Dr. John Townsend's research identifies 22 specific relational needs organized into four quadrants.
                These "relational nutrients" are essential for human flourishing, leadership development, and emotional
                health. Just as our bodies need physical nutrients, our souls need these relational nutrients to thrive
                and develop strong character.</strong>
            </div>

            <h4>The Four Quadrants of Relational Needs</h4>

            <div class="quadrants-grid">
              <div class="quadrant-box quadrant-1">
                <div class="quadrant-title"><i class="fas fa-heart"></i> QUADRANT 1: BE PRESENT</div>
                <div class="quadrant-desc">Unconditional felt-love and felt-acceptance.</div>
                <div class="quadrant-detail">
                  <strong>Acceptance:</strong> Connect without judgment<br>
                  <strong>Attunement:</strong> Connect with what another is experiencing<br>
                  <strong>Validation:</strong> Convey that their experience matters<br>
                  <strong>Identification:</strong> Share your similar story<br>
                  <strong>Containment:</strong> Allow venting while staying warm<br>
                  <strong>Comfort:</strong> Provide support for someone's loss
                </div>
              </div>

              <div class="quadrant-box quadrant-2">
                <div class="quadrant-title"><i class="fas fa-thumbs-up"></i> QUADRANT 2: CONVEY THE GOOD</div>
                <div class="quadrant-desc">Encourage and celebrate with words high in grace.</div>
                <div class="quadrant-detail">
                  <strong>Affirmation:</strong> Draw attention to the good<br>
                  <strong>Encouragement:</strong> Believe in someone's ability<br>
                  <strong>Respect:</strong> Assign value<br>
                  <strong>Hope:</strong> Provide confidence in the future<br>
                  <strong>Forgiveness:</strong> Cancel a debt<br>
                  <strong>Celebration:</strong> Acknowledge wins
                </div>
              </div>

              <div class="quadrant-box quadrant-3">
                <div class="quadrant-title"><i class="fas fa-lightbulb"></i> QUADRANT 3: PROVIDE REALITY</div>
                <div class="quadrant-desc">High truth that catalyzes growth.</div>
                <div class="quadrant-detail">
                  <strong>Clarification:</strong> Bring order to confusion<br>
                  <strong>Perspective:</strong> Offer a different viewpoint<br>
                  <strong>Insight:</strong> Convey deeper understanding<br>
                  <strong>Feedback:</strong> Give a personal response<br>
                  <strong>Confrontation:</strong> Face someone with appeal to change
                </div>
              </div>

              <div class="quadrant-box quadrant-4">
                <div class="quadrant-title"><i class="fas fa-rocket"></i> QUADRANT 4: CALL TO ACTION</div>
                <div class="quadrant-desc">Challenge someone to take steps toward growth.</div>
                <div class="quadrant-detail">
                  <strong>Advice:</strong> Recommend an action step<br>
                  <strong>Structure:</strong> Provide a framework<br>
                  <strong>Challenge:</strong> Strongly recommend difficult action<br>
                  <strong>Development:</strong> Create a growth environment<br>
                  <strong>Service:</strong> Guide engagement to giving back
                </div>
              </div>
            </div>

            <div class="activity-box">
              <h5>Four-Quadrant Movement Activity:</h5>
              <ol>
                <li>Post the four quadrants in the corners of the room or designate four areas</li>
                <li>Explain each quadrant briefly</li>
                <li>
                  Ask students to walk around to each location and read each of the relational nutrients listed in each
                  quadrant
                </li>
                <li>
                  Ask the guiding questions one at a time and have students move physically to the quadrant that
                  represents their answer
                </li>
                <li>
                  Ask one person per quadrant to share a sentence or two about why they are standing where they are
                  standing
                </li>
              </ol>
            </div>

            <div class="instruction-box">
              <h5>Guiding Questions:</h5>
              <div class="question-item">
                <span class="question-number">1</span>
                <span><strong>Which quadrant feels most supplied in your life?</strong></span>
              </div>
              <div class="question-item">
                <span class="question-number">2</span>
                <span><strong>Which quadrant feels most lacking in your life?</strong></span>
              </div>
              <div class="question-item">
                <span class="question-number">3</span>
                <span><strong>Which quadrant do you most offer others?</strong></span>
              </div>
              <div class="question-item">
                <span class="question-number">4</span>
                <span><strong>What quadrant do you need to focus growth in offering?</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Section (Full Width) -->
      <div class="section full-width">
        <div class="section-header">
          <span><i class="fas fa-tools"></i> ACTIVITY: BRIDGE BUILD CHALLENGE</span>
          <span class="time-badge">15 Minutes</span>
        </div>
        <div class="section-content">
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px">
            <div class="activity-box">
              <h5><i class="fas fa-list-check"></i> Materials Needed:</h5>
              <ul>
                <li>Drinking straws (20-30 per team)</li>
                <li>Masking tape or scotch tape (1 roll per team)</li>
                <li>Timer</li>
                <li>Measuring tape or ruler</li>
                <li>Optional: Small prizes for recognition</li>
              </ul>
            </div>

            <div class="instruction-box">
              <h5><i class="fas fa-trophy"></i> Competition Details:</h5>
              <p><strong>Challenge:</strong> Build the tallest free-standing tower using only straws and tape</p>
              <p><strong>Time Limit:</strong> 10 minutes building + 2-3 minutes measuring</p>
              <p>
                <strong>Rules:</strong> Tower must stand on its own for at least 10 seconds, only straws and tape may be
                used, tower cannot be attached to anything else, all team members must contribute
              </p>
              <p><strong>Recognition:</strong> Tallest tower, most creative design, best teamwork</p>
            </div>

            <div style="background: #f3f4f6; padding: 12px">
              <h5><i class="fas fa-instructions"></i> Detailed Instructions:</h5>
              <ol>
                <li><strong>Team Formation:</strong> Divide students into teams of 3-4 people</li>
                <li>
                  <strong>Challenge Explanation:</strong> Teams must build the tallest free-standing tower using only
                  straws and tape
                </li>
                <li><strong>Begin Building:</strong> Start 10-minute timer and let teams work</li>
                <li><strong>Facilitator Role:</strong> Observe team dynamics and communication patterns</li>
                <li><strong>Testing Phase:</strong> Measure towers that stand for 10+ seconds</li>
                <li><strong>Recognition:</strong> Acknowledge multiple categories of success</li>
              </ol>
            </div>
          </div>

          <div class="activity-box" style="margin-top: 8px">
            <h5><i class="fas fa-lightbulb"></i> Learning Connection:</h5>
            <p>
              This challenge directly demonstrates the need for
              <strong>all four quadrants of relational needs</strong> in action. Teams will need
              <strong>Quadrant 1 (Be Present)</strong> - accepting different ideas and staying connected during stress.
              They'll need <strong>Quadrant 2 (Convey the Good)</strong> - encouraging teammates and celebrating small
              wins. <strong>Quadrant 3 (Provide Reality)</strong> becomes essential when offering feedback on designs
              and clarifying the plan. Finally, <strong>Quadrant 4 (Call to Action)</strong> emerges as teams challenge
              each other to try new approaches and provide structure for their building process. Watch for which
              quadrants naturally emerge and which teams might be missing.
            </p>
          </div>
        </div>
      </div>

      <!-- Debrief Section -->
      <div class="section full-width">
        <div class="section-header">
          <span><i class="fas fa-comments"></i> DEBRIEF</span>
          <span class="time-badge">1 Minute</span>
        </div>
        <div class="section-content">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
            <div class="activity-box">
              <h5>Tower Examination & Winners:</h5>
              <ul>
                <li>Examine each team's tower and measure heights</li>
                <li>Declare winners in multiple categories</li>
                <li>Acknowledge the collaborative effort required</li>
                <li>Brief recognition of teamwork observed</li>
              </ul>
            </div>

            <div class="instruction-box">
              <h5>Quick Reflection Questions:</h5>
              <div class="question-item">
                <span class="question-number">1</span>
                <div>
                  <p><strong>What quadrants did your team use most during the challenge?</strong></p>
                </div>
              </div>
              <div class="question-item">
                <span class="question-number">2</span>
                <div>
                  <p><strong>Which relational nutrients did you need more of?</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>
          <strong><span style="color: rgb(255, 255, 255)">Bishop García Diego High School - Emerging Leaders Advisory Program</span></strong>
        </p>
        <p>
          <span style="color: rgb(255, 255, 255)">
            Based on Dr. John Townsend's "People Fuel: Fill Your Tank for Life, Love, and Leadership"</span>
        </p>
      </div>
    </div>
  </body>
</html>
        `
      }} />
    </div>
  )
})

// Session 4: Zones of Regulation
app.get('/session-4', (c) => {
  return c.render(
    <div className="session-page">
      <nav className="breadcrumb">
        <a href="/">Home</a> {' > '} <span>Session 4: Zones of Regulation</span>
      </nav>
      
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Session 4: Zones of Emotional Regulation - Complete Facilitator Guide</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
    <style>
      @page {
        size: tabloid landscape;
        margin: 0.4in;
      }

      body {
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        line-height: 1.3;
        margin: 0;
        padding: 0.4in;
        max-width: none;
        background: white;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }

      .container {
        width: 100%;
        max-width: none;
      }

      .header {
        background: #1e3a8a;
        color: white;
        padding: 15px;
        margin-bottom: 12px;
        text-align: center;
      }

      .header h1 {
        font-size: 22px;
        margin: 0 0 5px 0;
        color: white;
      }

      .header h2 {
        font-size: 16px;
        margin: 0 0 5px 0;
        color: #d97706;
      }

      .header p {
        font-size: 12px;
        margin: 0;
      }

      .logo-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }

      .time-badge {
        background: #d97706;
        color: white;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 9px;
        font-weight: bold;
        display: inline-block;
      }

      .section {
        background: white;
        border: 2px solid #1e3a8a;
        margin-bottom: 10px;
        page-break-inside: avoid;
      }

      .section-header {
        background: #1e3a8a;
        color: white;
        padding: 8px 12px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .section-content {
        padding: 12px;
      }

      .activity-box {
        background: #dbeafe;
        padding: 8px;
        margin: 8px 0;
        border-left: 3px solid #d97706;
      }

      .instruction-box {
        background: #fef3c7;
        padding: 8px;
        margin: 8px 0;
        border-radius: 4px;
      }

      .zones-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8px;
        margin: 10px 0;
      }

      .zone-box {
        padding: 8px;
        border-radius: 4px;
        border: 2px solid;
      }

      .zone-red {
        background: #fee2e2;
        border-color: #ef4444;
      }

      .zone-green {
        background: #dcfce7;
        border-color: #22c55e;
      }

      .zone-blue {
        background: #dbeafe;
        border-color: #3b82f6;
      }

      .zone-title {
        font-weight: bold;
        font-size: 10px;
        margin-bottom: 3px;
        text-align: center;
      }

      .zone-desc {
        font-size: 9px;
        margin-bottom: 3px;
      }

      .zone-detail {
        font-size: 8px;
        line-height: 1.2;
      }

      .main-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .full-width {
        grid-column: 1 / -1;
      }

      h3 {
        font-size: 12px;
        margin: 8px 0 6px 0;
        color: #1e3a8a;
      }

      h4 {
        font-size: 11px;
        margin: 6px 0 4px 0;
        color: #1e3a8a;
      }

      h5 {
        font-size: 10px;
        margin: 4px 0 3px 0;
        font-weight: bold;
      }

      ul,
      ol {
        margin: 4px 0;
        padding-left: 16px;
      }

      li {
        margin-bottom: 2px;
        font-size: 9px;
      }

      p {
        margin: 4px 0;
        font-size: 9px;
      }

      .question-item {
        display: flex;
        align-items: flex-start;
        margin: 4px 0;
      }

      .question-number {
        background: #d97706;
        color: white;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 8px;
        font-weight: bold;
        margin-right: 6px;
        flex-shrink: 0;
      }

      .footer {
        background: #1e3a8a;
        color: white;
        padding: 8px;
        text-align: center;
        margin-top: 12px;
        font-size: 9px;
      }

      .highlight-box {
        background: #fef3c7;
        border-left: 4px solid #d97706;
        padding: 8px;
        margin: 8px 0;
        font-size: 9px;
      }

      .key-point {
        background: #fee2e2;
        border: 1px solid #ef4444;
        padding: 6px;
        margin: 6px 0;
        border-radius: 4px;
        font-size: 9px;
      }

      @media print {
        body {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }

        .section,
        .activity-box,
        .instruction-box,
        .zone-box {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <div class="logo-container">
          <div style="font-size: 10px">EMERGING LEADERS ADVISORY PROGRAM</div>
          <div style="font-size: 10px">BISHOP GARCÍA DIEGO HIGH SCHOOL</div>
        </div>
        <h1>Session 4: Zones of Emotional Regulation</h1>
        <h2>(Polyvagal Theory)</h2>
        <p><span style="color: rgb(255, 255, 255)">Where Character Grows and Leaders Emerge</span></p>
        <div style="margin-top: 8px">
          <span class="time-badge"><i class="fas fa-clock"></i> 30 Minutes Total</span>
        </div>
      </div>

      <div class="main-content">
        <!-- Welcome + Check-in Section -->
        <div class="section">
          <div class="section-header">
            <span><i class="fas fa-chart-line"></i> WELCOME + CHECK-IN</span>
            <span class="time-badge">4 Minutes</span>
          </div>
          <div class="section-content">
            <h3>Activity: Emotional Intensity Spectrogram</h3>

            <div class="activity-box">
              <h5>Instructions for Facilitators:</h5>
              <ol>
                <li>
                  <strong>Setup:</strong> Designate two opposite walls in the room for each spectrogram measurement
                </li>
                <li>
                  <strong>First Spectrogram:</strong> Point to one wall as "high emotional intensity" and the other as
                  "low emotional intensity." Have students stand somewhere along the spectrum that represents them
                </li>
                <li>
                  <strong>Second Spectrogram:</strong> Point to one wall as "able to feel and deal with highly positive
                  emotions" and the other as "highly positive emotions are difficult to feel and deal with"
                </li>
                <li>
                  <strong>Third Spectrogram:</strong> Point to one wall as "able to feel and deal with highly negative
                  emotions" and the other as "highly negative emotions are difficult to feel and deal with"
                </li>
              </ol>
            </div>

            <div class="instruction-box">
              <h5>Purpose & Expected Outcomes:</h5>
              <ul>
                <li>Increase self-awareness about emotional intensity and regulation patterns</li>
                <li>Normalize different emotional experiences and comfort levels</li>
                <li>Introduce the concept that emotional regulation is a skill that can be developed</li>
                <li>Set the stage for learning about emotional zones and regulation strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Mini-Teach Section -->
        <div class="section">
          <div class="section-header">
            <span><i class="fas fa-brain"></i> MINI-TEACH</span>
            <span class="time-badge">8 Minutes</span>
          </div>
          <div class="section-content">
            <h3>Zones of Emotional Regulation</h3>

            <div style="background: #f3f4f6; padding: 8px; margin: 6px 0; font-size: 9px">
              <strong
                >The Zones of Regulation is a framework that helps us understand and manage our emotional states. Based
                on polyvagal theory, it identifies three main zones that describe our nervous system's responses to
                different situations. Learning to recognize which zone we're in and developing strategies to get back to
                "the green zone" helps us regulate our emotions and respond more effectively to life's
                challenges.</strong
              >
            </div>

            <h4>The Three Zones of Regulation</h4>

            <div class="zones-grid">
              <div class="zone-box zone-red">
                <div class="zone-title">Red Zone — Too Much Emotion</div>
                <div class="zone-desc"><strong>Response:</strong> Fight or flight</div>
                <div class="zone-desc"><strong>Emotions:</strong> Rage, fear, anxiety</div>
                <div class="zone-detail"><strong>Impact:</strong> Hard to think clearly</div>
              </div>

              <div class="zone-box zone-green">
                <div class="zone-title">Green Zone — Feeling & Dealing</div>
                <div class="zone-desc"><strong>Response:</strong> Calm but alert</div>
                <div class="zone-desc"><strong>Emotions:</strong> All emotions welcome, but managed</div>
                <div class="zone-detail"><strong>Impact:</strong> Able to think, connect, and act</div>
              </div>

              <div class="zone-box zone-blue">
                <div class="zone-title">Blue Zone — Too Little Emotion</div>
                <div class="zone-desc"><strong>Response:</strong> Freeze or shut down</div>
                <div class="zone-desc"><strong>Emotions:</strong> Numbness, shame, withdrawal</div>
                <div class="zone-detail"><strong>Impact:</strong> Disconnected from others</div>
              </div>
            </div>

            <div class="key-point">
              <p>
                <strong><i class="fas fa-exclamation-triangle"></i> Key Point:</strong> None of these zones are "bad" —
                they're survival responses. But leaders need tools to return to Green so they can respond instead of
                react.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Regulation Strategies Section -->
      <div class="section full-width">
        <div class="section-header">
          <span><i class="fas fa-tools"></i> PRACTICING THREE REGULATION STRATEGIES</span>
          <span class="time-badge">Part of Mini-Teach</span>
        </div>
        <div class="section-content">
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px">
            <div class="activity-box">
              <h5><i class="fas fa-lungs"></i> Deep Breathing:</h5>
              <p>
                Practice breathing in through the nose and out through the mouth with a focus on the rise and fall of
                the stomach. Have students place one hand on their chest and one on their stomach to feel the
                difference.
              </p>
            </div>

            <div class="activity-box">
              <h5><i class="fas fa-eye"></i> 5 Senses Grounding:</h5>
              <p>Guide students through identifying:</p>
              <ul>
                <li>What do you hear?</li>
                <li>What do you see?</li>
                <li>What do you smell?</li>
                <li>What do you taste?</li>
                <li>What do you feel?</li>
              </ul>
            </div>

            <div class="activity-box">
              <h5><i class="fas fa-anchor"></i> Grounding Through Feet:</h5>
              <p>
                Have students feel and press their feet against the ground, noticing the connection and stability this
                provides.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Section -->
      <div class="section full-width">
        <div class="section-header">
          <span><i class="fas fa-masks-theater"></i> ACTIVITY: TELEPHONE CHARADES</span>
          <span class="time-badge">15 Minutes</span>
        </div>
        <div class="section-content">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 8px">
            <div class="activity-box">
              <h5><i class="fas fa-list-check"></i> Materials Needed:</h5>
              <ul>
                <li>
                  Pre-written emotion cards or list (happy, sad, angry, excited, nervous, confused, surprised,
                  frustrated, etc.)
                </li>
                <li>Space for teams to line up with room between each person</li>
                <li>Timer (optional)</li>
              </ul>
            </div>

            <div class="instruction-box">
              <h5><i class="fas fa-gamepad"></i> Game Instructions:</h5>
              <ol>
                <li><strong>Team Setup:</strong> Split students into teams of no more than 6 people each</li>
                <li>
                  <strong>Line Formation:</strong> Teams line up facing the same direction with space between each
                  person
                </li>
                <li>
                  <strong>Emotion Display:</strong> Show the first person in each line a written emotion (same emotion
                  for all teams)
                </li>
                <li>
                  <strong>Silent Communication:</strong> The first person taps the second person's shoulder to turn them
                  around and acts out the emotion silently
                </li>
                <li>
                  <strong>Pass It Down:</strong> Each person taps the next person and passes along what they think the
                  emotion is through acting
                </li>
                <li><strong>Final Guess:</strong> The last person in each line says what emotion they think it is</li>
                <li><strong>Scoring:</strong> The team that guesses closest to the original emotion wins that round</li>
              </ol>
            </div>
          </div>

          <div class="highlight-box">
            <h5><i class="fas fa-lightbulb"></i> Facilitator Tips:</h5>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
              <div>
                <ul>
                  <li><strong>Emotion Variety:</strong> Include emotions from all three zones (Blue, Green, Red)</li>
                  <li><strong>No Talking or Sounds:</strong> Emphasize that only nonverbal communication is allowed</li>
                  <li>
                    <strong>Encourage Creativity:</strong> Students can use facial expressions, body language, and
                    gestures
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><strong>Multiple Rounds:</strong> Play 3-5 rounds with different emotions</li>
                  <li>
                    <strong>Zone Connection:</strong> After each round, briefly identify which zone that emotion belongs
                    to
                  </li>
                  <li>
                    <strong>Celebrate Attempts:</strong> Focus on effort and creativity rather than perfect accuracy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Debrief Section -->
      <div class="section full-width">
        <div class="section-header">
          <span><i class="fas fa-comments"></i> DEBRIEF</span>
          <span class="time-badge">3 Minutes</span>
        </div>
        <div class="section-content">
          <div class="activity-box">
            <h5>Emotional Growth Reflection:</h5>
            <div class="question-item">
              <span class="question-number">1</span>
              <div>
                <p>
                  <strong
                    >What is the most difficult emotion for you to feel, and what strategy might you use in the future
                    to grow in feeling that emotion?</strong
                  >
                </p>
                <p style="font-size: 8px; color: #666">
                  Consider which emotions you tend to avoid and how the regulation strategies we practiced today (deep
                  breathing, 5 senses grounding, or feet grounding) might help you stay in the green zone when
                  experiencing challenging emotions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>
          <strong
            ><span style="color: rgb(255, 255, 255)"
              >Bishop García Diego High School - Emerging Leaders Advisory Program</span
            ></strong
          >
        </p>
        <p><span style="color: rgb(255, 255, 255)"> Based on the Polyvagal Theory by Stephen W. Porges, PhD</span></p>
      </div>
    </div>
  </body>
</html>
        `
      }} />
    </div>
  )
})

// Session 5: 7 Types of Relationships
app.get('/session-5', (c) => {
  return c.render(
    <div className="session-page">
      <nav className="breadcrumb">
        <a href="/">Home</a> {' > '} <span>Session 5: 7 Types of Relationships</span>
      </nav>
      
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Session 5: 7 Types of Relationships - Complete Facilitator Guide</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
    <style>
      @page {
        size: tabloid landscape;
        margin: 0.4in;
      }

      body {
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        line-height: 1.3;
        margin: 0;
        padding: 0.4in;
        max-width: none;
        background: white;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }

      .container {
        width: 100%;
        max-width: none;
      }

      .header {
        background: #1e3a8a;
        color: white;
        padding: 15px;
        margin-bottom: 12px;
        text-align: center;
      }

      .header h1 {
        font-size: 22px;
        margin: 0 0 5px 0;
        color: white;
      }

      .header h2 {
        font-size: 16px;
        margin: 0 0 5px 0;
        color: #d97706;
      }

      .header p {
        font-size: 12px;
        margin: 0;
      }

      .logo-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }

      .time-badge {
        background: #d97706;
        color: white;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 9px;
        font-weight: bold;
        display: inline-block;
      }

      .section {
        background: white;
        border: 2px solid #1e3a8a;
        margin-bottom: 10px;
        page-break-inside: avoid;
      }

      .section-header {
        background: #1e3a8a;
        color: white;
        padding: 8px 12px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .section-content {
        padding: 12px;
      }

      .activity-box {
        background: #dbeafe;
        padding: 8px;
        margin: 8px 0;
        border-left: 3px solid #d97706;
      }

      .instruction-box {
        background: #fef3c7;
        padding: 8px;
        margin: 8px 0;
        border-radius: 4px;
      }

      .relationships-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 6px;
        margin: 10px 0;
      }

      .relationship-box {
        padding: 6px;
        border-radius: 4px;
        border: 2px solid;
        font-size: 8px;
      }

      .rel-coaches {
        background: #f3e8ff;
        border-color: #8b5cf6;
      }

      .rel-comrades {
        background: #dbeafe;
        border-color: #3b82f6;
      }

      .rel-casuals {
        background: #dcfce7;
        border-color: #22c55e;
      }

      .rel-colleagues {
        background: #fef3c7;
        border-color: #eab308;
      }

      .rel-care {
        background: #fed7aa;
        border-color: #fb923c;
      }

      .rel-chronics {
        background: #fee2e2;
        border-color: #ef4444;
      }

      .rel-contaminants {
        background: #374151;
        border-color: #1f2937;
        color: white;
      }

      .rel-title {
        font-weight: bold;
        font-size: 9px;
        margin-bottom: 2px;
      }

      .rel-desc {
        font-size: 8px;
        margin-bottom: 2px;
      }

      .rel-detail {
        font-size: 7px;
        line-height: 1.2;
      }

      .main-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .full-width {
        grid-column: 1 / -1;
      }

      h3 {
        font-size: 12px;
        margin: 8px 0 6px 0;
        color: #1e3a8a;
      }

      h4 {
        font-size: 11px;
        margin: 6px 0 4px 0;
        color: #1e3a8a;
      }

      h5 {
        font-size: 10px;
        margin: 4px 0 3px 0;
        font-weight: bold;
      }

      ul,
      ol {
        margin: 4px 0;
        padding-left: 16px;
      }

      li {
        margin-bottom: 2px;
        font-size: 9px;
      }

      p {
        margin: 4px 0;
        font-size: 9px;
      }

      .question-item {
        display: flex;
        align-items: flex-start;
        margin: 4px 0;
      }

      .question-number {
        background: #d97706;
        color: white;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 8px;
        font-weight: bold;
        margin-right: 6px;
        flex-shrink: 0;
      }

      .footer {
        background: #1e3a8a;
        color: white;
        padding: 8px;
        text-align: center;
        margin-top: 12px;
        font-size: 9px;
      }

      .ninja-rules {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin: 8px 0;
      }

      @media print {
        body {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }

        .section,
        .activity-box,
        .instruction-box,
        .relationship-box {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <div class="logo-container">
          <div style="font-size: 10px">EMERGING LEADERS ADVISORY PROGRAM</div>
          <div style="font-size: 10px">BISHOP GARCÍA DIEGO HIGH SCHOOL</div>
        </div>
        <h1>Session 5: 7 Types of Relationships</h1>
        <h2>(People Fuel, Townsend)</h2>
        <p><span style="color: rgb(255, 255, 255)">Where Character Grows and Leaders Emerge</span></p>
        <div style="margin-top: 8px">
          <span class="time-badge"><i class="fas fa-clock"></i> 30 Minutes Total</span>
        </div>
      </div>

      <div class="main-content">
        <!-- Welcome + Check-in Section -->
        <div class="section">
          <div class="section-header">
            <span><i class="fas fa-fist-raised"></i> WELCOME + CHECK-IN</span>
            <span class="time-badge">6 Minutes</span>
          </div>
          <div class="section-content">
            <h3>Activity: Ultimate Ninja</h3>

            <div class="activity-box">
              <h5>How to Play:</h5>
              <div class="ninja-rules">
                <div>
                  <p><strong>1. Circle Up + Strike Pose:</strong></p>
                  <ul>
                    <li>Stand in circle, arms relaxed</li>
                    <li>Count "NIN-JA!" strike frozen ninja pose</li>
                    <li>Freeze - feet locked in place</li>
                  </ul>

                  <p><strong>2. Take Turns Clockwise:</strong></p>
                  <ul>
                    <li>One motion to tag another's hand</li>
                    <li>No pausing or faking halfway</li>
                  </ul>

                  <p><strong>3. Dodge if Attacked:</strong></p>
                  <ul>
                    <li>One defensive motion only</li>
                    <li>Freeze in new pose after move</li>
                  </ul>
                </div>
                <div>
                  <p><strong>4. If Tagged:</strong></p>
                  <ul>
                    <li>Hand hit: put behind back</li>
                    <li>Both hands: you're out</li>
                  </ul>

                  <p><strong>5. Safety & Respect:</strong></p>
                  <ul>
                    <li>Light, controlled movements</li>
                    <li>Precision, not power</li>
                    <li>Too aggressive = you're out</li>
                  </ul>

                  <p><strong>6. Last Ninja Wins:</strong></p>
                  <ul>
                    <li>Continue until one remains</li>
                    <li>Quick applause, move to session</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mini-Teach Section -->
        <div class="section">
          <div class="section-header">
            <span><i class="fas fa-users"></i> MINI-TEACH</span>
            <span class="time-badge">12 Minutes</span>
          </div>
          <div class="section-content">
            <h3>The Seven C's of Relationships</h3>

            <div style="background: #f3f4f6; padding: 8px; margin: 6px 0; font-size: 9px">
              <strong
                >We all choose individuals to be around us, and most of them are pretty good finds. But it's easy to get
                out of balance and have more "drain" conversations than "gain" conversations. Dr. John Townsend's Seven
                C's model helps us be intentional about how we spend our time and energy in relationships, ranked from
                highest to lowest resource for you.</strong
              >
            </div>

            <h4>The Seven C's (Highest to Lowest Resource)</h4>

            <div class="relationships-grid">
              <div class="relationship-box rel-coaches">
                <div class="rel-title"><i class="fas fa-user-graduate"></i> 1. COACHES</div>
                <div class="rel-desc">Mentors and guides with expertise who develop you.</div>
                <div class="rel-detail">
                  Subject matter experts in leadership, parenting, or growth; know how to coach with theory and steps;
                  make time "all about you."
                </div>
              </div>

              <div class="relationship-box rel-comrades">
                <div class="rel-title"><i class="fas fa-heart"></i> 2. COMRADES</div>
                <div class="rel-desc">Your Life Team—3-10 people who know everything about you.</div>
                <div class="rel-detail">
                  Know it all about you, accept you fully, tell you needed truths. Fully involved in own growth, want
                  mutual help.
                </div>
              </div>

              <div class="relationship-box rel-casuals">
                <div class="rel-title"><i class="fas fa-smile"></i> 3. CASUALS</div>
                <div class="rel-desc">Good, positive friends and neighbors you enjoy.</div>
                <div class="rel-detail">
                  Just good, positive people. Kids on same teams, like same activities. Help enjoy life, "farm team" for
                  Life Team.
                </div>
              </div>

              <div class="relationship-box rel-colleagues">
                <div class="rel-title"><i class="fas fa-briefcase"></i> 4. COLLEAGUES</div>
                <div class="rel-desc">Competent, relationally-oriented work/school partners.</div>
                <div class="rel-detail">
                  Truly competent, relationally oriented, work well on teams. Make work/school energy-producing vs
                  draining.
                </div>
              </div>

              <div class="relationship-box rel-care">
                <div class="rel-title"><i class="fas fa-hands-helping"></i> 5. CARE</div>
                <div class="rel-desc">Those you help who need what you can supply.</div>
                <div class="rel-detail">
                  People without something you can provide. Help make world better, release oxytocin. Need to give back
                  but watch energy.
                </div>
              </div>

              <div class="relationship-box rel-chronics">
                <div class="rel-title"><i class="fas fa-exclamation-triangle"></i> 6. CHRONICS</div>
                <div class="rel-desc">"Bless their heart" individuals with ongoing problems.</div>
                <div class="rel-detail">
                  Long-term patterns, flat learning curve. Don't learn from experiences or apply repeated advice. Want
                  support more than solutions.
                </div>
              </div>

              <div class="relationship-box rel-contaminants">
                <div class="rel-title"><i class="fas fa-biohazard"></i> 7. CONTAMINANTS</div>
                <div class="rel-desc">People with bad motives who damage others.</div>
                <div class="rel-detail">
                  Beyond normal imperfection. Envious, desire to divide and damage. Attack relationships, work,
                  well-being. Warn and distance.
                </div>
              </div>
            </div>

            <div class="activity-box">
              <h5>Floor Movement Activity Instructions:</h5>
              <ol>
                <li>Lay out 7 C relationship descriptions on ground in line</li>
                <li>Students walk around reading each description</li>
                <li>Ask exploration questions one at a time</li>
                <li>Students move to C-relationship representing their answer</li>
                <li>2-3 from each area share reasoning</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Exploration Questions Section (Full Width) -->
      <div class="section full-width">
        <div class="section-header">
          <span><i class="fas fa-question-circle"></i> EXPLORATION QUESTIONS</span>
          <span class="time-badge">Part of Mini-Teach</span>
        </div>
        <div class="section-content">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
            <div class="instruction-box">
              <h5>Questions 1-4:</h5>
              <div class="question-item">
                <span class="question-number">1</span>
                <span><strong>Which C-role do you have the most people representing in your life?</strong></span>
              </div>
              <div class="question-item">
                <span class="question-number">2</span>
                <span><strong>Which C-role do you have the fewest people representing in your life?</strong></span>
              </div>
              <div class="question-item">
                <span class="question-number">3</span>
                <span><strong>After a personal win, where do you go to celebrate or share good news?</strong></span>
              </div>
              <div class="question-item">
                <span class="question-number">4</span>
                <span
                  ><strong
                    >If you're feeling overwhelmed or anxious, whose presence helps you feel seen and supported?</strong
                  ></span
                >
              </div>
            </div>

            <div class="instruction-box">
              <h5>Questions 5-8:</h5>
              <div class="question-item">
                <span class="question-number">5</span>
                <span
                  ><strong>Which C-role gives you the most opportunity to practice setting boundaries?</strong></span
                >
              </div>
              <div class="question-item">
                <span class="question-number">6</span>
                <span><strong>Who pushes your buttons most?</strong></span>
              </div>
              <div class="question-item">
                <span class="question-number">7</span>
                <span><strong>Who encourages you to step out of your comfort zone?</strong></span>
              </div>
              <div class="question-item">
                <span class="question-number">8</span>
                <span
                  ><strong
                    >When you need honest, constructive feedback on a mistake, which C-role do you turn to?</strong
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Section -->
      <div class="section full-width">
        <div class="section-header">
          <span><i class="fas fa-project-diagram"></i> ACTIVITY: DIAGRAMMING YOUR RELATIONSHIPS</span>
          <span class="time-badge">10 Minutes</span>
        </div>
        <div class="section-content">
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px">
            <div class="activity-box">
              <h5><i class="fas fa-list-check"></i> Materials Needed:</h5>
              <ul>
                <li>Paper and pencils/pens for each student</li>
                <li>Space for small group sharing</li>
                <li>Optional: colored pencils for different C-types</li>
              </ul>
            </div>

            <div class="instruction-box">
              <h5><i class="fas fa-instructions"></i> Activity Instructions:</h5>
              <ol>
                <li><strong>Create Diagram:</strong> Draw relationships in your life</li>
                <li><strong>Use Shapes:</strong> Triangles for males, circles for females</li>
                <li><strong>Size Matters:</strong> Shape size = importance in your life</li>
                <li><strong>Show Closeness:</strong> Proximity = how close you feel</li>
                <li><strong>Label with C's:</strong> Mark each person's C-relationship type</li>
                <li><strong>Small Group Share:</strong> Groups of 3-4</li>
                <li><strong>Reflect:</strong> Which relational type needs development?</li>
              </ol>
            </div>

            <div style="background: #f3f4f6; padding: 8px">
              <h5><i class="fas fa-lightbulb"></i> Facilitator Tips:</h5>
              <ul>
                <li><strong>Encourage Honesty:</strong> For personal growth and awareness</li>
                <li><strong>No Judgment:</strong> Different relationship patterns are normal</li>
                <li><strong>Privacy Respected:</strong> Choose level of detail to share</li>
                <li><strong>Focus on Growth:</strong> Identify gaps, not criticize current relationships</li>
                <li><strong>Time Management:</strong> 5-6 min diagramming, 4-5 min sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Debrief Section -->
      <div class="section full-width">
        <div class="section-header">
          <span><i class="fas fa-comments"></i> DEBRIEF</span>
          <span class="time-badge">2 Minutes</span>
        </div>
        <div class="section-content">
          <div class="activity-box">
            <h5>Most Trusted Adult Identification:</h5>
            <div class="question-item">
              <span class="question-number">1</span>
              <div>
                <p>
                  <strong
                    >Who would you designate as your Most Trusted Adult that you can go to if you need extra emotional
                    support, and why?</strong
                  >
                </p>
                <p style="font-size: 8px">
                  Think about which adult in your life provides the safest space for you to be vulnerable and seek help
                  when you're struggling. This could be a parent, teacher, coach, counselor, family member, or mentor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>
          <strong
            ><span style="color: rgb(255, 255, 255)"
              >Bishop García Diego High School - Emerging Leaders Advisory Program</span
            ></strong
          >
        </p>
        <p>
          <span style="color: rgb(255, 255, 255)">
            Based on Dr. John Townsend's "People Fuel: Fill Your Tank for Life, Love, and Leadership"</span
          >
        </p>
      </div>
    </div>
  </body>
</html>
        `
      }} />
    </div>
  )
})

export default app
