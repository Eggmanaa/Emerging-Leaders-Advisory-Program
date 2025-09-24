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
          <li><a href="/session-3">Session 3: 22 Relational Needs</a></li>
          <li><a href="/session-4">Session 4: TBA</a></li>
          <li><a href="/session-5">Session 5: TBA</a></li>
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
              <h4>Session 3: 22 Relational Needs</h4>
              <p>Building healthy relationships and communication skills</p>
              <span className="duration">30 minutes</span>
            </a>
            <div className="session-card coming-soon">
              <h4>Session 4: Coming Soon</h4>
              <p>Additional leadership development content</p>
              <span className="duration">30 minutes</span>
            </div>
            <div className="session-card coming-soon">
              <h4>Session 5: Coming Soon</h4>
              <p>Final integration and application session</p>
              <span className="duration">30 minutes</span>
            </div>
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

// Session 3: 22 Relational Needs
app.get('/session-3', (c) => {
  return c.render(
    <div className="session-page">
      <nav className="breadcrumb">
        <a href="/">Home</a> {' > '} <span>Session 3: 22 Relational Needs</span>
      </nav>
      
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 3: 22 Relational Needs - Complete Facilitator Guide</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            font-size: 11px;
            line-height: 1.4;
            margin: 0;
            padding: 0.5in;
            max-width: none;
            background: white;
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
        .footer {
            background: #1e3a8a;
            color: white;
            padding: 12px;
            text-align: center;
            margin-top: 20px;
            font-size: 11px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div style="font-size: 12px; margin-bottom: 15px">
                <div>EMERGING LEADERS ADVISORY PROGRAM</div>
                <div>BISHOP GARCÍA DIEGO HIGH SCHOOL</div>
            </div>
            <h1>Session 3: 22 Relational Needs</h1>
            <h2>Building Healthy Relationships</h2>
            <p><span style="color: rgb(255, 255, 255);">Where Character Grows and Leaders Emerge</span></p>
            <div style="margin-top: 10px">
                <span class="time-badge"><i class="fas fa-clock"></i> 30 Minutes Total</span>
            </div>
        </div>

        <div class="main-content">
            <!-- Welcome + Check-in Section -->
            <div class="section">
                <div class="section-header">
                    <span><i class="fas fa-heart"></i> WELCOME + CHECK-IN</span>
                    <span class="time-badge">4 Minutes</span>
                </div>
                <div class="section-content">
                    <h3>Activity: Relationship Mapping</h3>
                    <div class="activity-box">
                        <h5>Instructions for Facilitators:</h5>
                        <ol>
                            <li>Have students think about their most important relationships</li>
                            <li>Ask them to identify different types of relationships (family, friends, mentors, etc.)</li>
                            <li>Discuss what makes these relationships meaningful</li>
                            <li>Share insights about healthy relationship qualities</li>
                        </ol>
                    </div>
                    <div class="instruction-box">
                        <h5>Purpose & Expected Outcomes:</h5>
                        <ul>
                            <li>Introduce the concept of relational needs and healthy relationships</li>
                            <li>Create awareness of relationship quality vs. quantity</li>
                            <li>Set foundation for understanding emotional and social needs</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Mini-Teach Section -->
            <div class="section">
                <div class="section-header">
                    <span><i class="fas fa-users"></i> MINI-TEACH</span>
                    <span class="time-badge">8 Minutes</span>
                </div>
                <div class="section-content">
                    <h3>The 22 Relational Needs Framework</h3>
                    <div style="background: #f3f4f6; padding: 12px; margin: 8px 0; font-size: 11px; border-radius: 6px">
                        <strong>Research shows that healthy relationships meet 22 core relational needs. Understanding these needs helps us build stronger, more fulfilling connections with others and recognize what we seek in our relationships.</strong>
                    </div>
                    
                    <h4>Four Categories of Relational Needs</h4>
                    <div class="quadrants-grid">
                        <div class="quadrant-box quadrant-1">
                            <div class="quadrant-title"><i class="fas fa-shield-alt"></i> SECURITY NEEDS</div>
                            <div class="quadrant-desc">Feeling safe, accepted, and valued in relationships</div>
                            <p style="font-size: 10px">Examples: Acceptance, comfort, encouragement, respect, support, security</p>
                        </div>
                        <div class="quadrant-box quadrant-2">
                            <div class="quadrant-title"><i class="fas fa-eye"></i> ATTENTION NEEDS</div>
                            <div class="quadrant-desc">Being seen, heard, and understood by others</div>
                            <p style="font-size: 10px">Examples: Attention, affection, appreciation, approval, validation, understanding</p>
                        </div>
                        <div class="quadrant-box quadrant-3">
                            <div class="quadrant-title"><i class="fas fa-star"></i> IMPORTANCE NEEDS</div>
                            <div class="quadrant-desc">Feeling valued and significant in relationships</div>
                            <p style="font-size: 10px">Examples: Importance, priority, inclusion, recognition, chosen, needed</p>
                        </div>
                        <div class="quadrant-box quadrant-4">
                            <div class="quadrant-title"><i class="fas fa-hands"></i> ACCESS NEEDS</div>
                            <div class="quadrant-desc">Connection, intimacy, and mutual accessibility</div>
                            <p style="font-size: 10px">Examples: Access, availability, nearness, intimacy, belonging, togetherness</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Activity Section (Full Width) -->
        <div class="section full-width">
            <div class="section-header">
                <span><i class="fas fa-puzzle-piece"></i> ACTIVITY: RELATIONAL NEEDS EXPLORATION</span>
                <span class="time-badge">15 Minutes</span>
            </div>
            <div class="section-content">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px">
                    <div class="activity-box">
                        <h5><i class="fas fa-clipboard-list"></i> Personal Reflection:</h5>
                        <ol>
                            <li>Students identify their top 5 relational needs from the 22 needs</li>
                            <li>Reflect on which needs are being met in their current relationships</li>
                            <li>Consider which needs might be lacking</li>
                            <li>Think about how they can better meet others' relational needs</li>
                        </ol>
                    </div>
                    <div class="instruction-box">
                        <h5><i class="fas fa-comments"></i> Small Group Discussion:</h5>
                        <p>In groups of 3-4, students share insights about:</p>
                        <ul>
                            <li>Which relational needs resonate most with them</li>
                            <li>Examples of when these needs were met or unmet</li>
                            <li>How understanding these needs can improve their relationships</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Debrief Section -->
        <div class="section full-width">
            <div class="section-header">
                <span><i class="fas fa-lightbulb"></i> DEBRIEF</span>
                <span class="time-badge">3 Minutes</span>
            </div>
            <div class="section-content">
                <div class="activity-box">
                    <h5>Key Takeaways:</h5>
                    <ol>
                        <li><strong>Awareness:</strong> Understanding your own relational needs helps you communicate them to others</li>
                        <li><strong>Empathy:</strong> Recognizing others' needs helps you build stronger connections</li>
                        <li><strong>Growth:</strong> Healthy relationships involve mutual meeting of relational needs</li>
                        <li><strong>Action:</strong> Consider one specific way you can better meet someone's relational needs this week</li>
                    </ol>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p><strong><span style="color: rgb(255, 255, 255);">Bishop García Diego High School - Emerging Leaders Advisory Program</span></strong></p>
            <p><span style="color: rgb(255, 255, 255);">Based on research in relational psychology and social-emotional learning</span></p>
        </div>
    </div>
</body>
</html>
        `
      }} />
    </div>
  )
})

// Session 4: Coming Soon
app.get('/session-4', (c) => {
  return c.render(
    <div className="session-page coming-soon">
      <nav className="breadcrumb">
        <a href="/">Home</a> {' > '} <span>Session 4: Coming Soon</span>
      </nav>
      
      <div className="coming-soon-content">
        <h1>Session 4: Coming Soon</h1>
        <p>This session is currently in development and will be available soon.</p>
        <p>Check back later for the complete facilitator guide.</p>
        <a href="/" className="back-home">← Back to Home</a>
      </div>
    </div>
  )
})

// Session 5: Coming Soon
app.get('/session-5', (c) => {
  return c.render(
    <div className="session-page coming-soon">
      <nav className="breadcrumb">
        <a href="/">Home</a> {' > '} <span>Session 5: Coming Soon</span>
      </nav>
      
      <div className="coming-soon-content">
        <h1>Session 5: Coming Soon</h1>
        <p>This session is currently in development and will be available soon.</p>
        <p>Check back later for the complete facilitator guide.</p>
        <a href="/" className="back-home">← Back to Home</a>
      </div>
    </div>
  )
})

export default app
